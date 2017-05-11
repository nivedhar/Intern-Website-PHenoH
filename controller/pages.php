<?php

require_once 'controller.php';
require_once 'lib/Mobile-Detect/Mobile_Detect.php';

class PagesController extends Controller
{
    public static $_conn;
    public function __construct()
    {
        parent::__construct();
        
        $conn           =   new Connection();
        self::$_conn    =   $conn->connection();
    }
    
    public function index()
    {
        try
        {
            $messages       =   self::$messages;
            $fun_facts      =   $img_src    =   $lat    =   $lng    =   null;

            $images_array   =   array(mt_rand(1,5), mt_rand(6,10), mt_rand(11,15), mt_rand(16, 20));
            $img_src        =   array(1  =>  'public/assets/images/slider/'.$images_array[0].'.jpg',
                                2   =>  'public/assets/images/slider/'.$images_array[1].'.jpg',
                                3   =>  'public/assets/images/slider/'.$images_array[2].'.jpg',
                                4   =>  'public/assets/images/slider/'.$images_array[3].'.jpg');

            
            $query_2          =   self::$_conn->prepare("SELECT id_testimonial, title, name, description FROM admin_testimonials");
            $query_2->execute();

            $testimonials   =   $query_2->fetchAll(PDO::FETCH_ASSOC);

            $detect         =   new Mobile_Detect;
            
            if($detect->isMobile() || $detect->isTablet())
            {
                self::$_conn    =   null;

                ob_start();
                include('views/pages/hero_mob.html');
                $hero_tpl = ob_get_contents();
                ob_end_clean();

                ob_start();
                include('views/pages/team_mob.html');
                $team_tpl = ob_get_contents();
                ob_end_clean();

                $factoid_tpl    =   file_get_contents('views/pages/factoid_mob.html');
                $evenClass      =   '';
                $oddClass       =   '';
            }
            else
            {
                $query          =   self::$_conn->prepare("SELECT id_fact, description, fact, icon_class FROM admin_fun_facts");
                $query->execute();
                $result         =   $query->fetchAll(PDO::FETCH_ASSOC);
                
                if( ! empty($result) || is_array($result))
                {
                    shuffle($result);
                    $keys       =   array_rand($result, 4);
                    $fun_facts  =   array($result[$keys[0]], $result[$keys[1]], $result[$keys[2]], $result[$keys[3]]);
                    
                    foreach($fun_facts as $key => $fact)
                    {
                        if($fact['id_fact'] == 2)
                        {
                            date_default_timezone_set('America/Los_Angeles');
                            
                            $now        =   time();
                            $init_date  =   strtotime("2014-07-31");
                            $datediff   =   $now - $init_date;
                            
                            $fun_facts[$key]['fact']    =   floor($datediff / (60 * 60 * 24));
                        }
                    }
                }

                self::$_conn    =   null;

                ob_start();
                include('views/pages/hero_desk.html');
                $hero_tpl = ob_get_contents();
                ob_end_clean();

                ob_start();
                include('views/pages/fun_desk.html');
                $fun_tpl = ob_get_contents();
                ob_end_clean();

                ob_start();
                include('views/pages/team_desk.html');
                $team_tpl = ob_get_contents();
                ob_end_clean();

                $factoid_tpl    =   file_get_contents('views/pages/factoid_desk.html');
                $evenClass      =   'headerImgEven';
                $oddClass       =   'headerImgOdd';
            }
        }
        catch(Exception $e)
        {
            return $e->getMessage();
        }
        
        require_once('views/pages/index.html');
    }
    
    public function error()
    {
        require_once('views/pages/error.html');
    }
}