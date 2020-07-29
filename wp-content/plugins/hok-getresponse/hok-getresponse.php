<?php
/*
Plugin Name: Integracja z GetResponse 
Description: Integracja z GetResponse  wykonana dla House of Knowledge
Author: Piotr Sułkowski| MilleniumStudio 
Version: 1.0
*/

class HokGetresponse
{
    function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->Getresponse = new HokGetresponseIntegration();
        add_shortcode('getresponse_form', array($this, 'GenerateGetResponseForm'));
        add_action('wpcf7_before_send_mail', array($this, 'hookCf7BeforeSent'), 10, 3);
        add_filter('wpcf7_ajax_json_echo', array($this, 'filterCf7OutputContent'), 10, 2);
    }

    private function isGetResponseForm($cf7id)
    {
        $sql = "SELECT post_id FROM wp_postmeta WHERE meta_key='_mail' AND meta_value LIKE '%\"recipient\";s:%:\"GetResponse\"%' AND post_id = " . $cf7id;
        $FormID = $this->db->get_var($sql);
        if (is_null($FormID)) {
            return false;
        } else {
            return true;
        }
    }

    public function hookCf7BeforeSent($cf7, &$abort, $object)
    {
        if ($this->isGetResponseForm($cf7->id())) {
            $cf7_submission = WPCF7_Submission::get_instance();
            if ($cf7_submission) {
                $posted_data = $cf7_submission->get_posted_data();

                if (!isset($posted_data['email'])) {
                    $abort = true;
                    $object->set_response('W formularzu brakuje pola email');
                    return false;
                }

                $NewContact = $this->Getresponse->NewContact($posted_data['email']);
                if ($NewContact === false) {
                    $abort = true;
                    $object->set_response('Wystąpił problem z zapisaniem Cię do newslettera');
                    return false;
                }
            } else {
                $abort = false;
            }
        }
    }

    public function filterCf7OutputContent($response, &$result)
    {
        if ($this->isGetResponseForm($result['contact_form_id']) && $response['status'] != 'validation_failed') {
            $response['status'] = 'mail_sent';
            $response["message"] = 'Dziękujemy! Poprawnie zapisano Cię do naszego Newlettera!';
        }
        return $response;
    }
}

class HokGetresponseIntegration
{
    function __construct()
    {
        $this->apiKey = 'z9avl0ksfht6m3at9prsb9ze5fdz1xsj';
        $this->curl = null;
        $this->apiEndpoint = 'https://api.getresponse.com/v3';
    }

    private function getClientIP()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        return $ip;
    }

    private function curlCall(string $url = '', string $postVars = '', array $headers = array(), bool $isPostRequest = true)
    {
        $this->curl = curl_init($url);
        $headers[] = 'X-Auth-Token: api-key ' . $this->apiKey;

        if ($postVars !== '') {
            $headers[] = 'Content-Type: application/json';
            curl_setopt($this->curl, CURLOPT_POSTFIELDS, $postVars);
        }
        if ($isPostRequest) {
            curl_setopt($this->curl, CURLOPT_POST, 1);
        } else {
            curl_setopt($this->curl, CURLOPT_POST, 0);
        }

        curl_setopt($this->curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($this->curl, CURLOPT_HTTPHEADER, $headers);

        $server_output = curl_exec($this->curl);
        curl_close($this->curl);

        $server_output = json_decode($server_output, true);
        return $server_output;
    }

    private function getCampaigns()
    {
        $Campaigns = $this->curlCall($this->apiEndpoint . '/campaigns', '', array(), false);

        if (isset($Campaigns[0]['campaignId'])) {
            return $Campaigns;
        } else {
            return array();
        }
    }

    private function getDefaultCampaign()
    {
        $Campaigns = $this->getCampaigns();
        foreach ($Campaigns as $key => $Campaign) {
            if ($Campaign['isDefault']) {
                return $Campaign;
            }
        }
    }

    private function getContactByEmail($email)
    {
        $Contact = $this->curlCall($this->apiEndpoint . '/contacts?query[email]=' . $email, '', array(), false);
        if (!isset($Contact[0]['contactId'])) {
            return false;
        } else {
            return $Contact[0];
        }
    }

    public function NewContact($email, $name = null, $tags = null, $customFieldValues = null, $scoring = null)
    {
        $DefaultCampaign = $this->getDefaultCampaign();
        $CampaignID = $DefaultCampaign['campaignId'];

        $PostVars = array(
            "email" => $email,
            "campaign" => array('campaignId' => $CampaignID),
            "ipAddress" => $this->getClientIP()
        );

        if (!is_null($name)) {
            $PostVars['name'] =  $name;
        }
        if (!is_null($tags)) {
            $PostVars['tags'] =  $tags;
        }
        if (!is_null($customFieldValues)) {
            $PostVars['customFieldValues'] =  $customFieldValues;
        }
        if (!is_null($scoring)) {
            $PostVars['scoring'] =  $scoring;
        }
        $PostVars = json_encode($PostVars);

        $existingContact = $this->getContactByEmail($email);
        if ($existingContact !== false) {
            $ContactData = $this->curlCall($this->apiEndpoint . '/contacts/' . $existingContact['contactId'], $PostVars);
        } else {
            $ContactData = $this->curlCall($this->apiEndpoint . '/contacts', $PostVars);
        }

        if (is_null($ContactData) || isset($ContactData['contactId'])) {
            return true;
        } else {
            return $ContactData;
        }
    }
}

$_HokGetresponse = new HokGetresponse();
