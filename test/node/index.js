const xss	= require('../../');

var tests	= [
	'<b>hi webskan</b> <div> ',
	`<div class="someclass ckk pp">
		test div
		<div attr="value" style="color:red">
			<div> end div <b> is ho ho </b></div>
		</div>
	</div>
	<div style="color:yellow; background: #cdfsf"> hello </div> </div><div style="kk:kl; color:#hgf">test </b></i></div>`,
	`<div> test opening <b> low tag level without <i> closing it</div>`,
	`test 2 opening <b> low tag level without <i> closing theme`,
	`<font color="#cccccc" data-tt="hoho">test font color <i> and i </i></font>`,
	`Lorem ipsum dolor <b><b>sit</b> amet</b>, 
		<div>
			<div>
				<div>
					consectetur adip
				</div>
			<div>
		<div>
	end of test`,
	`this is a <a href="http://example.com" style="color:red; content:some content">link</a>
	<a href="kkkk" target="dsfsdf"
		 class="hello sdfsdf sdf" attr ="qkjsd" jjsdjj   =  sdkjfhsd>
		  lorem <i>kkk</i> </a>`,
	`test images <img src="https://example.com/blank.png" width="748" height="845">
		<div width="4584" height="lll"><div>the seconde div shoold be removed</div></div>`,
	`test <b> svg </b> <div> <div> </div> </div>
		<svg> <circle x="45" y = 415 /> Lorem <kkk>
				<div attr="this attr mast not be removed"> jkk </div>
		</svg> 
		<div class="this shoold be removed" style='border:5px solid #ccc'> hello </div>
		end.
		`,
	`<!DOCTYPE html>
<html lang="fr" data-async-path="/"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://opengraphprotocol.org/schema/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:fp="http://plus.lefigaro.fr/fp/elements/1.0/" version="XHTML+RDFa 1.0">
    <head>
        <meta charset="UTF-8" />

                                                <title>Marine Le Pen mise en examen pour des tweets diffusant des exécutions de Daech</title>
    <meta property="og:title" content="Marine Le Pen mise en examen pour des tweets diffusant des exécutions de Daech" />
    <meta name="twitter:title" content="Marine Le Pen mise en examen pour des tweets diffusant des exécutions de Daech" />
    <meta property="dc:title" content="Marine Le Pen mise en examen pour des tweets diffusant des exécutions de Daech" />

    <meta name="description" content="LE SCAN POLITIQUE - «Je suis inquiétée pour combattre le terrorisme. C&#039;est le monde à l&#039;envers», a réagi la présidente du Front national auprès du Figaro. Elle risque trois ans de prison et 75.000 euros d&#039;amende." />
    <meta property="og:description" content="LE SCAN POLITIQUE - «Je suis inquiétée pour combattre le terrorisme. C&#039;est le monde à l&#039;envers», a réagi la présidente du Front national auprès du Figaro. Elle risque trois ans de prison et 75.000 euros d&#039;amende." />
    <meta property="og:locale" content="fr_FR" />
    <meta name="twitter:description" content="LE SCAN POLITIQUE - «Je suis inquiétée pour combattre le terrorisme. C&#039;est le monde à l&#039;envers», a réagi la présidente du Front national auprès du Figaro. Elle risque trois ans de prison et 75.000 euros d&#039;amende." />

    <meta property="og:site_name" content="FIGARO"/>

    <meta name="keywords" content="Marine Le Pen, Gilbert Collard, actu politique, actualite, hyper actualite politique, temps reel, live, direct politique, coulisse, temoignage, redaction, sujet politique" />

    <link rel="canonical" href="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php">
    <meta property="og:url" content="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php"/>
    <meta name="twitter:url" content="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" />



    <meta property="og:type" content="article" />
    <meta property="fp:type" content="article" />

    <meta property="fp:app_id" content="sdv" />

    <meta name="news_keywords" content="Marine Le Pen, Gilbert Collard, actu politique, actualite, hyper actualite politique, temps reel, live, direct politique, coulisse, temoignage, redaction, sujet politique">

                                        <meta name="twitter:image" content="http://i.f1g.fr/media/figaro/805x453_crop/2018/03/01/XVMdd9d3598-1d55-11e8-9832-367a659cf4b5.jpg" />
                                        <meta property="og:image" content="http://i.f1g.fr/media/figaro/805x453_crop/2018/03/01/XVMdd9d3598-1d55-11e8-9832-367a659cf4b5.jpg"/>
                            <meta property="og:image:width" content="805" />
                                        <meta property="og:image:height" content="453" />
                        
    <meta property="article:tag" content="Marine Le Pen, Gilbert Collard, actu politique, actualite, hyper actualite politique, temps reel, live, direct politique, coulisse, temoignage, redaction, sujet politique"/>

    <meta property="article:section" content="Le Scan"/>
    <meta property="article:published_time" content="2018-03-01T12:42:59+01:00"/>
    <meta property="dc:date.created" content="2018-03-01T12:42:59+01:00"/>
    <meta property="article:modified_time" content="2018-03-01T14:40:44+01:00"/>
    <meta property="dc:date.modified" content="2018-03-01T14:40:44+01:00"/>
                        <meta property="article:author" content="http://plus.lefigaro.fr/page/csapin-0"/>
            
<meta name="twitter:widgets:csp" content="on">
<meta name="twitter:card" content="summary_large_image"/>

    <meta name="twitter:site" content="Le_Scan">
    <meta name="twitter:creator" content="Le_Scan" />

    <meta property="fp:remote_id" content="20180301ARTFIG00158" />

    <meta property="al:ios:url" content="lefigarofr://article/20180301ARTFIG00158/lefigaro.fr" />
    <meta property="al:android:url" content="http://figaro.fr/article/20180301ARTFIG00158" />
    <link rel="alternate" href="android-app://fr.playsoft.lefigarov3/http/figaro.fr/article/20180301ARTFIG00158" />
    <meta property="al:android:package" content="fr.playsoft.lefigarov3" />
            <link rel="alternate" href="ios-app://319557427/lefigarofr/article/20180301ARTFIG00158/lefigaro.fr" />
    
    <meta property="al:ios:app_store_id" content="319557427" />

    <meta property="al:ios:app_name" content="Le Figaro.fr" />
    <meta property="al:android:app_name" content="Le Figaro.fr" />

    <meta property="fp:opencomment" content="TRUE" />

<meta property="dc:language" content="ISO639-2 fre"/>

                    
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

                        
                <link rel="dns-prefetch" href="http://a.f1g.fr">
        <link rel="dns-prefetch" href="http://i.f1g.fr">
        <link rel="dns-prefetch" href="http://p.f1g.fr">
        <link rel="dns-prefetch" href="http://acdn.adnxs.com">
        <link rel="dns-prefetch" href="http://cdn.krxd.net">
        <link rel="dns-prefetch" href="http://widgets.outbrain.com">
        <link rel="dns-prefetch" href="http://connect.facebook.com">
        <link rel="dns-prefetch" href="http://vcdn.adnxs.com">

        
        <link rel="apple-touch-icon" sizes="180x180" href="http://a.f1g.fr/f/img/favicon/apple-touch-icon.png?v20180301084433">
        <link rel="icon" type="image/png" sizes="32x32" href="http://a.f1g.fr/f/img/favicon/favicon-32x32.png?v20180301084433">
        <link rel="icon" type="image/png" sizes="16x16" href="http://a.f1g.fr/f/img/favicon/favicon-16x16.png?v20180301084433">
        <link rel="manifest" href="http://a.f1g.fr/f/img/favicon/manifest.json?v20180301084433">
        <link rel="mask-icon" href="http://a.f1g.fr/f/img/favicon/safari-pinned-tab.svg?v20180301084433" color="#407ec9">
        <link rel="shortcut icon" href="http://a.f1g.fr/f/img/favicon/favicon.ico?v20180301084433">
        <meta name="msapplication-config" content="http://a.f1g.fr/f/img/favicon/browserconfig.xml?v20180301084433">
        <meta name="theme-color" content="#407ec9">


        <meta name="msapplication-config" content="http://a.f1g.fr/f/img/browserconfig.xml?v20180301084433">

                            <script src="http://a.f1g.fr/f/js/redirect-premium.js?v20180301084433"></script>
    
                                    <!-- Facebook Pixel Code -->
<script>
    !function (f, b, e, v, n, t, s) {
        if (f.fbq)return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq)f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');
    fbq('init', '356024307906577');
    fbq('track', "PageView");
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=356024307906577&ev=PageView&noscript=1"/></noscript>
<!-- End Facebook Pixel Code -->

        
                <script src="http://a.f1g.fr/f/js/polyfill.js?v20180301084433"></script>

                <script src="http://a.f1g.fr/f/js/vendors.js?v20180301084433"></script>

                                  <script src="http://a.f1g.fr/h/assets-components/header-footer/header.js?50"></script>
        
                            <script type="text/javascript">
                fpAuthPassport={'appId':'sdv','commentReplyContainerClass':'fig-comment','defautlFormValues':{'data-goto':'http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php','data-formlevel': 'light','data-public': '0','data-update': '0'}};
                var premiumServicesHost = 'http://plus.lefigaro.fr';
            </script>
            <script src="http://plus.lefigaro.fr/sites/default/modules/fp/fp_user_services/scripts/fp_auth.min.js"></script>
        
                                                                <!-- BEGIN Krux Control Tag -->
<script class="kxct" data-id="JCBG01Av" data-timing="async" data-version="1.9" type="text/javascript">
    window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);
    (function(){
        var k=document.createElement('script');k.type='text/javascript';k.async=true;
        var m,src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
        k.src = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
                (location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid=JCBG01Av";
        var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
    }());
</script>
<!-- END Krux Controltag -->
                    
        <!--[if !IE]> -->
        <link rel="stylesheet" href="http://a.f1g.fr/f/css/fig-style.css?v20180301084433">
        <!-- <![endif]-->

                <link rel="stylesheet" href="https://a.f1g.fr/fea/css/widget-search.css?v1.0.3">

                            <link rel="stylesheet" type="text/css" href="http://a.f1g.fr/f/css/fig-style-print.css?v20180301084433" media="print">
        
                                            
    
                    <link rel="stylesheet" href="http://a.f1g.fr/h/assets-components/header-footer/header.css?50">
        
        <script>
    //from https://github.com/kaimallea/isMobile
    !function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);
</script>


                            <script src="http://a.f1g.fr/f/js/utils.js?v20180301084433"></script>
        
                                            <script type="application/ld+json">[{"@context":"http:\/\/schema.org","@type":"WebPage","breadcrumb":{"@context":"http:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"http:\/\/www.lefigaro.fr\/","name":"Home"}},{"@type":"ListItem","position":2,"item":{"@id":"http:\/\/www.lefigaro.fr\/politique\/le-scan","name":"Le Scan"}}]}},{"@context":"http:\/\/schema.org","@type":"NewsArticle","headline":"Marine Le Pen mise en examen pour des tweets diffusant des ex\u00e9cutions de Daech","alternativeHeadline":[],"image":{"@type":"ImageObject","url":"http:\/\/i.f1g.fr\/media\/figaro\/orig\/2018\/03\/01\/XVMdd9d3598-1d55-11e8-9832-367a659cf4b5.jpg","height":1359,"width":2040},"video":{"type":"VideoObject","name":"Marine Le Pen mise en examen pour des tweets diffusant des ex\u00e9cutions de Daech","description":"LE SCAN POLITIQUE - \u00abJe suis inqui\u00e9t\u00e9e pour combattre le terrorisme. C'est le monde \u00e0 l'envers\u00bb, a r\u00e9agi la pr\u00e9sidente du Front national aupr\u00e8s du <i>Figaro. <\/i>Elle risque trois ans de prison et 75.000 euros d'amende.","thumbnailUrl":"http:\/\/i.f1g.fr\/media\/figaro\/orig\/2018\/03\/01\/XVMdd9d3598-1d55-11e8-9832-367a659cf4b5.jpg","embedUrl":"https:\/\/players.brightcove.net\/610043537001\/41qR7Z79e_default\/index.html?videoId=5743031809001","contentUrl":"http:\/\/www.lefigaro.fr\/politique\/le-scan\/2018\/03\/01\/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php","uploadDate":"2018-03-01T12:42:59+01:00"},"comment":[{"@type":"Comment","name":"artemidore","description":"Beaucoup trop de parano\u00efaques sur ce forum\n","url":"http:\/\/plus.lefigaro.fr\/page\/artemidore-0"},{"@type":"Comment","name":"Grille-Pain","description":"Bien fait :D\nEt \u00e7a se dit &quot;avocate&quot; (merci les amis de papa surtout) ?\nencore une preuve qu&#039;elle n&#039;a pas le niveau intellectuel ni culturel pour des fonctions publiques...\n","url":"http:\/\/plus.lefigaro.fr\/page\/michel-666-sardouille-0"},{"@type":"Comment","name":"Mecki Joseph","description":"... et pendant ce temps jawad - le logeur de terroristes s&#039;amuse et provoque avec les publications sur les r\u00e9seaux sociaux ...\n","url":"http:\/\/plus.lefigaro.fr\/page\/slavkov-joseph"},{"@type":"Comment","name":"Tribord amure","description":"La pendaison de Saddam Hussein\nce n&#039;\u00e9tait pas un dessin anim\u00e9  !!!\n.\nDiffus\u00e9e en boucle sur les chaines d&#039;info\nle 1 er Janvier 2007.\n","url":"http:\/\/plus.lefigaro.fr\/page\/tribordamure"},{"@type":"Comment","name":"Dubitatifff","description":"Ces images   violentes  .. qui a effectu\u00e9 ces actes d&#039;une telle cruaut\u00e9 ;  de barbarie ?\nPeut \u00eatre un Daech de chez nous ? qu&#039; en sait-on ?\nPeut \u00eatre demain renvoy\u00e9 , reviendra t-il chez nous ?\nquelle appr\u00e9ciation ; les d\u00e9noncer est-ce une faute grave ?\n","url":"http:\/\/plus.lefigaro.fr\/page\/dubitatifff-0"},{"@type":"Comment","name":"mais bon sang","description":"pauvre France ! liberticide si on d\u00e9nonce les v\u00e9rit\u00e9s !\n","url":"http:\/\/plus.lefigaro.fr\/page\/maisbonsang"},{"@type":"Comment","name":"Papillon181024","description":"Il faut que Marine Lepen explique comment et en quoi  diffuser des images d&#039; ex\u00e9cutions de Daech constitue&quot; un combat contre le terrorisme&quot;.\n","url":"http:\/\/plus.lefigaro.fr\/page\/papillon181024-296196"},{"@type":"Comment","name":"Milenn","description":"La justice fran\u00e7aise ne prendrait pas parti pris pour tout simplement la diminuer politiquement ?\n","url":"http:\/\/plus.lefigaro.fr\/page\/milenn-0"},{"@type":"Comment","name":"gadget","description":"Elle combattait le terrorisme en diffusant ces photos ?\n.\nJe ne crois pas, non.\nElle essayait seulement de justifier les propos intol\u00e9rables qu&#039;elle avait tenus, en montrant des photos plus intol\u00e9rables encore. Mais en aucun cas, elle ne &quot;combattait&quot; Daesh en postant ces photos.\n.\nMarine Le Pen n&#039;est d\u00e9j\u00e0 pas capable de &quot;combattre&quot; un vieillard borgne, s\u00e9nile et quasiment impotent, ... alors Daesh, hein !?\n","url":"http:\/\/plus.lefigaro.fr\/page\/gadget"},{"@type":"Comment","name":"MARIE EGLANTINE","description":"la mauvaise foi de certains juges avec  lunettes rose et autruche ! voir le constat de cette politique depuis 40 ans !\n","url":"http:\/\/plus.lefigaro.fr\/page\/michele-megard"},{"@type":"Comment","name":"jazzprog","description":"En fait c&#039;est l&#039;avis des familles des victimes qui serait int\u00e9ressant, pas celui des juges inf\u00e9od\u00e9s et de la presse complaisante.\nEt dire que pendant ce temps l\u00e0, Jawad Bendaoud doit bien  se marrer !...\n","url":"http:\/\/plus.lefigaro.fr\/page\/jazzprog-0"},{"@type":"Comment","name":"yellowstone","description":"\u00ab diffusion d\u2019images violentes \u00bb, un d\u00e9lit passible de trois ans d\u2019emprisonnement et 75 000 euros d\u2019amende ... la loi c&#039;est pour tout le monde . y compris pour Marion Anne Perrine Le Pen, dite Marine Le Pen Ch\u00e2telaine de Montretout\n","url":"http:\/\/plus.lefigaro.fr\/page\/alain-kerusel"},{"@type":"Comment","name":"yakfkon","description":"C\u2019est vraiment triste de voir ou en est la justice .\n","url":"http:\/\/plus.lefigaro.fr\/page\/yakfkon-0"},{"@type":"Comment","name":"BABA COOL...","description":"je ne suis pas fan de cette dame ,mais cette d\u00e9cision prise par les juges de Nanterre est \u00e0 se rouler par terre....(juste pour les rimes )\n&quot;cachez ces images que nous ne voulons voir &quot; ah les tartuffes !\n","url":"http:\/\/plus.lefigaro.fr\/page\/homme-des-voeux-de-bartissol-0"},{"@type":"Comment","name":"Une des jeanne","description":"Je ne vote pas FN et je porte peu de cr\u00e9dits aux propos de MLP, mais l\u00e0, je suis constern\u00e9e et tr\u00e8s en col\u00e8re de cette attaque bassement politique dont elle fait l&#039;objet pour avoir diffus\u00e9 des images qui devraient interpeler tout le monde! Nous sommes \u00e0 la veille de laisser rentrer en France des individus connus pour leurs crimes contre notre pays, et je me pose la question de savoir si c&#039;est la m\u00eame justice qui va traiter leurs cas!\n","url":"http:\/\/plus.lefigaro.fr\/page\/jeanne-graziani"},{"@type":"Comment","name":"ayon3","description":"marine \u00e9gale \u00e0 elle-m\u00eame. Elle diffuse des images de propagande de l&#039;EI.\n.\nIl faudrait ajouter la charge li\u00e9e \u00e0 une entreprise terroriste. Au minimum, il faudrait la ficher S.\n","url":"http:\/\/plus.lefigaro.fr\/page\/ayon3-0"},{"@type":"Comment","name":"Lego Z","description":"750 commentaires ! Allez un effort que diable ! Dans ce tapis de bombes ou le bon gout et les capacit\u00e9s de jugement se confrontent et se confortent \u00e0 l&#039;absence de maitrise de l&#039;orthographe.\n","url":"http:\/\/plus.lefigaro.fr\/page\/alain-kerjean-0"},{"@type":"Comment","name":"Jean-Emarre","description":"Je me souviens avoir vu sur certains journaux de presse \u00e9crite, et m\u00eame \u00e0 la t\u00e9l\u00e9 des images de terroristes de Daesch avec couteaux et sabres \u00e0 la main et des otages \u00e0 genoux devant eux.....ce n&#039;\u00e9tait gu\u00e8re mieux...\n","url":"http:\/\/plus.lefigaro.fr\/page\/grandpa"},{"@type":"Comment","name":"Politiquement incorrecte","description":"Du grand n&#039;importe quoi ! Offensive tous azimuts contre les opposants politiques. Avec les textes en pr\u00e9paration contre les soi disant fake news. Ceux qui ont tellement jou\u00e9 m\u00e9diatiquement la carte de certains candidats devraient se m\u00e9fier, s&#039;ils ne sont pas ou plus dans la ligne.\nSi je donne des r\u00e9f\u00e9rences historiques pass\u00e9es ou pr\u00e9sentes... La pente actuellement suivie me para\u00eet extr\u00eamement dangereuse pour les libert\u00e9s publiques. Esp\u00e9rons que je ne constaterai encore une fois que...\nPour finir, et pour \u00eatre parfaitement claire, je ne suis pas supportrice de MLP et mon commentaire aurait \u00e9t\u00e9 le m\u00eame s&#039;il s&#039;\u00e9tait agi d&#039;une autre personne d&#039;un autre bord politique.\n","url":"http:\/\/plus.lefigaro.fr\/page\/politiquement-incorrecte-0"},{"@type":"Comment","name":"M I A","description":"LA JUSTICE FAIT DU BON BOULOT\n","url":"http:\/\/plus.lefigaro.fr\/page\/jean-robert-vachon"}],"publisher":{"@context":"http:\/\/schema.org","@type":"Organization","name":"Le Figaro","url":"http:\/\/www.lefigaro.fr\/","logo":{"@type":"ImageObject","url":"http:\/\/a.f1g.fr\/assets-img\/i\/f\/m150.png"}},"keywords":"Marine Le Pen, Gilbert Collard, actu politique, actualite, hyper actualite politique, temps reel, live, direct politique, coulisse, temoignage, redaction, sujet politique","author":[{"@type":"Person","name":"Charles Sapin","url":"http:\/\/plus.lefigaro.fr\/page\/csapin-0"}],"url":"http:\/\/www.lefigaro.fr\/politique\/le-scan\/2018\/03\/01\/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php","datePublished":"2018-03-01T12:42:59+01:00","dateModified":"2018-03-01T14:40:44+01:00","description":"LE SCAN POLITIQUE - \u00abJe suis inqui\u00e9t\u00e9e pour combattre le terrorisme. C'est le monde \u00e0 l'envers\u00bb, a r\u00e9agi la pr\u00e9sidente du Front national aupr\u00e8s du Figaro. Elle risque trois ans de prison et 75.000 euros d'amende.","articleBody":"La pr\u00e9sidente du Front national a \u00e9t\u00e9 mise en examen ce matin par les juges d'instruction de Nanterre, pour \u00abdiffusion d'images violentes\u00bb, apr\u00e8s avoir diffus\u00e9 en 2015 sur Twitter des photos d'ex\u00e9cutions d'otages par le groupe \u00c9tat islamique, notamment de l'am\u00e9ricain James Foley.  Dans ses messages, Marine Le Pen s'adressait au journaliste Jean-Jacques Bourdin et \u00e0 son m\u00e9dia RMC\/BFMTV, qu'elle accusait d'avoir fait un \u00abparall\u00e8le\u00bb entre son parti et le groupe terroriste. Des tweets qui ont alors soulev\u00e9 une vaste pol\u00e9mique et qui ont \u00e9t\u00e9 qualifi\u00e9s de \u00abfaute politique et morale\u00bb, de la part du premier ministre de l'\u00e9poque, Manuel Valls. \u00bb LIRE AUSSI - Marine Le Pen a-t-elle le droit de diffuser des images de d\u00e9capitation sur Twitter?   \u00abJ'ai d\u00e9sormais ma m\u00e9daille de la r\u00e9sistance contre Daech. Je suis donc inqui\u00e9t\u00e9e pour combattre le terrorisme. C'est le monde \u00e0 l'envers, a r\u00e9agi Marine Le Pen au Figaro. Pour me mettre en examen ils ont d\u00fb aller chercher un texte qui \u00e0 l'origine est fait pour prot\u00e9ger les enfants du minitel rose.\u00bb  Le bureau de l'Assembl\u00e9e nationale avait d\u00e9cid\u00e9 de lever l'immunit\u00e9 de la pr\u00e9sidente du Front national au mois de novembre. Elle risque jusqu'\u00e0 trois ans de prison et 75.000 euros d'amende. Le d\u00e9put\u00e9 apparent\u00e9 FN du Gard, Gilbert Collard, a quant lui \u00e9t\u00e9 mis en examen pour des faits similaires le 11 janvier dernier. ","mainEntityOfPage":{"@type":"WebPage","@id":"http:\/\/www.lefigaro.fr\/politique\/le-scan\/2018\/03\/01\/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php"}},{"@context":"http:\/\/schema.org","@type":"Organization","name":"Le Figaro","url":"http:\/\/www.lefigaro.fr\/","logo":{"@type":"ImageObject","url":"http:\/\/a.f1g.fr\/assets-img\/i\/f\/m150.png"}}]</script>
                    
                            <script>
    dataLayer = [{
        "BU_siteName" : "lefigaro.fr",
        "BU_environnement" : "production",
        "BU_level1" : "Le Scan",
        "BU_level2" : "",
        "BU_level3" : "",
        "BU_pageCategory" : "article",
        "BU_websiteVersion" : "",
        "BU_userAgent" : "",
        "BU_pageType" : "classique",
        "BU_author" : "Charles Sapin",
        "BU_theme" : "",
        "BU_idArticle" : "20180301ARTFIG00158",
        "BU_tagName1" : "marine le pen",
        "BU_tagName2" : "gilbert collard",
        "BU_tagName3" : "",
        "BU_subscriptionContentState" : "",
        "BU_subscriptionContentType" : "gratuit",
        "BU_FigCCM1" : "",
        "BU_FigCCM2" : "",
        "BU_userStatus" : "",
        "BU_subscription" : "",
        "BU_orientation" : "",
        "SPE_publishedOn" : "2018-03-01T12:42:59+01:00",
        "SPE_modifiedOn" : "2018-03-01T14:40:44+01:00"
    }];
</script>


<script src="//a.f1g.fr/assets-sl/figanalytics/figanalytics.js"></script>

<script>
    var figAnalytics = new FigAnalytics();
    figAnalytics.init({
                    isPremium: false,
                customEvents: true,
    });
    dataLayer.push(figAnalytics.getDataBU());
</script>        
                            <!-- Google Tag Manager -->

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TC6DVH');</script>
        
<!-- End Google Tag Manager -->        
    </head>
    <body class="fig-body page-type--article">
                            <!-- Google Tag Manager (noscript) -->

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TC6DVH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
<!-- End Google Tag Manager (noscript) -->        
        <a href="#fig-page" class="fig-skip-main">Aller au contenu</a>

                            
    


<style>#fig-header .figh__full,#fig-header .collapsed_content,.fig-secondary-background,#fig-footer{background-color: #453a3a}.fig-secondary-color{color: #453a3a}#fig-header .figh-keyword__link,#fig-header .figh-abo__link,#fig-header .figh a,#fig-footer .figh-footer__link{color: #FFF}#fig-header .figh-keyword__link--more{border-color: #FFF}#fig-header .figh-keyword__item--current a{color: #FFF}.figh__not-ios #fig-header .figh-keyword__item--current a:hover,#fig-header .figh-keyword__item--current a:focus,.figh__not-ios #fig-header .figh__container a:hover,#fig-header .figh__container a:focus,.figh__not-ios #fig-header .figh-nav__container a:hover,#fig-footer .figh-footer__link:hover{color: #f9af00}#fig-header .figh-menu-item{color: #FFF}.figh__not-ios #fig-header .figh-menu-item:hover,.figh__not-ios #fig-header .figh-menu-item:focus{color:#f9af00}#fig-header .burger i,#fig-header .burger::before,#fig-header .burger::after{border-top: 1px solid #FFF !important}.figh__not-ios #fig-header .figh-menu-item--nav:hover .burger i,.figh__not-ios #fig-header .figh-menu-item--nav:hover .burger::before,.figh__not-ios #fig-header .figh-menu-item--nav:hover .burger::after{border-color: #f9af00 !important}.figh__not-ios #fig-header .figh-keyword__link--more:hover,#fig-header .figh-keyword__link--more:focus{border-color: #f9af00}#fig-header .figh-menu-item--nav,#fig-header .figh-collapse__nav-btn{background-color: #453a3a}#fig-header .figh-keyword__link--highlighted{background-color: #FFF;color: #453a3a}.figh__not-ios #fig-header.figh .figh-keyword__link--highlighted:hover{color: #FFF}#fig-header .figh-menu-item__container,#fig-header .figh-keyword__item--current a,#fig-header .figh-keyword__item{border-color: #826d6d}#fig-header .figh-search__btn,#fig-header button.figh-search__btn,#fig-header .figh-sign-in__btn{background-color: #f9af00;color: #FFF}#fig-footer .figh-footer__item{border-left-color: #826d6d}#fig-header .figh-treenode__item--root-node::before{background-color: #f9af00}#fig-header .figh-treenode__item--root-node>.figh-treenode__item-wrapper{background-color: #f9af00 !important}</style><header id="fig-header" class="figh figh--loading js-figh--has-reader js-figh-cookie"><div class="figh__container"><div class="figh-nielsen figh-nielsen--with-abo"><ul class="figh-nielsen__list"><li class="figh-nielsen__item"><a target="_blank" rel="noopener" aria-label="Aller sur lefigaro.fr (nouvelle fen&ecirc;tre)" title="lefigaro.fr (nouvelle fen&ecirc;tre)" href="http://www.lefigaro.fr"><i class="figh-icon-nielsen-home figh-nielsen__home"></i></a></li><li class="figh-nielsen__item" data-id="64137"><a title="Premium (nouvelle fen&ecirc;tre)" aria-label="Premium (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://premium.lefigaro.fr">Premium</a></li><li class="figh-nielsen__item" data-id="64131"><a title="Actu (nouvelle fen&ecirc;tre)" aria-label="Actu (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.lefigaro.fr/">Actu</a></li><li class="figh-nielsen__item" data-id="64132"><a title="Economie (nouvelle fen&ecirc;tre)" aria-label="Economie (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.lefigaro.fr/economie">Economie</a></li><li class="figh-nielsen__item" data-id="64133"><a title="Sport24 (nouvelle fen&ecirc;tre)" aria-label="Sport24 (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://sport24.lefigaro.fr/">Sport24</a></li><li class="figh-nielsen__item" data-id="64134"><a title="Culture (nouvelle fen&ecirc;tre)" aria-label="Culture (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.lefigaro.fr/culture">Culture</a></li><li class="figh-nielsen__item" data-id="64135"><a title="Lifestyle (nouvelle fen&ecirc;tre)" aria-label="Lifestyle (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.lefigaro.fr/lifestyle/">Lifestyle</a></li><li class="figh-nielsen__item" data-id="64136"><a title="Madame (nouvelle fen&ecirc;tre)" aria-label="Madame (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://madame.lefigaro.fr/">Madame</a></li><li class="figh-nielsen__item" data-id="64138"><a title="Figaro Store (nouvelle fen&ecirc;tre)" aria-label="Figaro Store (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://boutique.lefigaro.fr?ga_source=bouton_store_nielsen">Figaro Store</a></li><li class="figh-nielsen__item" data-id="64139"><a title="FigaroTV (nouvelle fen&ecirc;tre)" aria-label="FigaroTV (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://video.lefigaro.fr/">FigaroTV</a></li><li class="figh-nielsen__item" data-id="64140"><a title="Sant&eacute; (nouvelle fen&ecirc;tre)" aria-label="Sant&eacute; (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://sante.lefigaro.fr/">Sant&eacute;</a></li><li class="figh-nielsen__item" data-id="64141"><a title="Etudiant (nouvelle fen&ecirc;tre)" aria-label="Etudiant (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://etudiant.lefigaro.fr/">Etudiant</a></li><li class="figh-nielsen__item" data-id="64142"><a title="Histoire (nouvelle fen&ecirc;tre)" aria-label="Histoire (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.lefigaro.fr/histoire/">Histoire</a></li><li class="figh-nielsen__item" data-id="64143"><a title="Bourse (nouvelle fen&ecirc;tre)" aria-label="Bourse (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://bourse.lefigaro.fr/">Bourse</a></li><li class="figh-nielsen__item" data-id="64144"><a title="Nautisme (nouvelle fen&ecirc;tre)" aria-label="Nautisme (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://nautisme.lefigaro.fr/">Nautisme</a></li><li class="figh-nielsen__item" data-id="64145"><a title="Golf (nouvelle fen&ecirc;tre)" aria-label="Golf (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://golf.lefigaro.fr/">Golf</a></li><li class="figh-nielsen__item" data-id="64146"><a title="Programme TV (nouvelle fen&ecirc;tre)" aria-label="Programme TV (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://tvmag.lefigaro.fr/">Programme TV</a></li><li class="figh-nielsen__item" data-id="64147"><a title="Scope (nouvelle fen&ecirc;tre)" aria-label="Scope (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://scope.lefigaro.fr">Scope</a></li><li class="figh-nielsen__item" data-id="64148"><a title="Voyage (nouvelle fen&ecirc;tre)" aria-label="Voyage (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://voyage.lefigaro.fr/">Voyage</a></li><li class="figh-nielsen__item" data-id="64149"><a title="Ench&egrave;res (nouvelle fen&ecirc;tre)" aria-label="Ench&egrave;res (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://encheres.lefigaro.fr/">Ench&egrave;res</a></li><li class="figh-nielsen__item" data-id="64150"><a title="Vin (nouvelle fen&ecirc;tre)" aria-label="Vin (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://avis-vin.lefigaro.fr/">Vin</a></li><li class="figh-nielsen__item" data-id="64151"><a title="Evene (nouvelle fen&ecirc;tre)" aria-label="Evene (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://evene.lefigaro.fr/">Evene</a></li><li class="figh-nielsen__item" data-id="64152"><a title="M&eacute;t&eacute;o consult (nouvelle fen&ecirc;tre)" aria-label="M&eacute;t&eacute;o consult (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://france.meteoconsult.fr/meteo-france/prevision_meteo_france.php">M&eacute;t&eacute;o consult</a></li><li class="figh-nielsen__item" data-id="64153"><a title="Le particulier (nouvelle fen&ecirc;tre)" aria-label="Le particulier (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://leparticulier.lefigaro.fr/">Le particulier</a></li><li class="figh-nielsen__item" data-id="64154"><a title="Cadremploi (nouvelle fen&ecirc;tre)" aria-label="Cadremploi (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.cadremploi.fr/">Cadremploi</a></li><li class="figh-nielsen__item" data-id="64155"><a title="La chaine m&eacute;t&eacute;o (nouvelle fen&ecirc;tre)" aria-label="La chaine m&eacute;t&eacute;o (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://france.lachainemeteo.com/meteo-france/previsions-meteo-france-0.php">La chaine m&eacute;t&eacute;o</a></li><li class="figh-nielsen__item" data-id="64156"><a title="Keljob (nouvelle fen&ecirc;tre)" aria-label="Keljob (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.keljob.com/">Keljob</a></li><li class="figh-nielsen__item" data-id="64157"><a title="Kelformation (nouvelle fen&ecirc;tre)" aria-label="Kelformation (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.kelformation.com/">Kelformation</a></li><li class="figh-nielsen__item" data-id="64158"><a title="Explorimmo (nouvelle fen&ecirc;tre)" aria-label="Explorimmo (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.explorimmo.com/">Explorimmo</a></li><li class="figh-nielsen__item" data-id="64159"><a title="Propri&eacute;t&eacute;s de France (nouvelle fen&ecirc;tre)" aria-label="Propri&eacute;t&eacute;s de France (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.proprietesdefrance.com/">Propri&eacute;t&eacute;s de France</a></li><li class="figh-nielsen__item" data-id="64160"><a title="Ticketac (nouvelle fen&ecirc;tre)" aria-label="Ticketac (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.ticketac.com/">Ticketac</a></li><li class="figh-nielsen__item" data-id="64161"><a title="Vodeo (nouvelle fen&ecirc;tre)" aria-label="Vodeo (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.vodeo.tv/">Vodeo</a></li><li class="figh-nielsen__item" data-id="64162"><a title="Cplussur (nouvelle fen&ecirc;tre)" aria-label="Cplussur (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://cplussur.lefigaro.fr/">Cplussur</a></li><li class="figh-nielsen__item" data-id="64163"><a title="Figarochic.cn (nouvelle fen&ecirc;tre)" aria-label="Figarochic.cn (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener" href="http://www.figarochic.cn/">Figarochic.cn</a></li></ul><div class="figh-nielsen__scroll"><div class="figh-nielsen__scroll-container"><i class="figh-nielsen__button--left figh-icon-nielsen-left js-nielsen-bar-btn js-nielsen-bar-btn-left js-fig-nielsen__button--inactive" aria-label="D&eacute;filer vers la gauche"></i><i class="figh-nielsen__button--right figh-icon-nielsen-right figh-nielsen__button--active js-fig-nielsen__button--active js-nielsen-bar-btn-right" aria-label="D&eacute;filer vers la droite"></i></div></div><div class="figh-abo-container"><span class="figh-abo-logo"></span><a href="https://boutique.lefigaro.fr/abonnements/premium/1e99c?origine=VWH16001&amp;ga_source=bouton_premium_nielsen" class="figh-abo-button">Abonnez-vous</a></div></div><div id="social-block" class="js-reader-collapsed js-figh-panel figh-social figh-social--collapsed" aria-hidden="true"><div class="figh-social__container js-figh-social__container"><ul class="figh-social__list js-figh-social__list"><li class="figh-social__item js-figh-social__item" data-id="11625"><a href="http://www.facebook.com/LeScanPolitique"><i class="figh-social__link-icon figh-icon-facebook" style="background-color:#3a5795" aria-hidden="true"></i>Facebook</a></li><li class="figh-social__item js-figh-social__item" data-id="11626"><a href="https://twitter.com/Le_Scan"><i class="figh-social__link-icon figh-icon-twitter" style="background-color:#55acee" aria-hidden="true"></i>Twitter</a></li></ul><div class="figh-social__scroll js-figh-social__scroll"><div class="figh-social__scroll-container"><i class="figh-social__button--left figh-icon-nielsen-left js-social-bar-btn js-social-bar-btn-left js-fig-social__button--inactive" aria-label="D&eacute;filer vers la gauche"></i><i class="figh-social__button--right figh-icon-nielsen-right js-social-bar-btn figh-social__button--active js-fig-social__button--active js-social-bar-btn-right" aria-label="D&eacute;filer vers la droite"></i></div></div></div></div><div class="figh-search js-figh-search-block" aria-hidden="true"><form class="figh-search__container js-figh-search__container" action="http://recherche.lefigaro.fr/recherche/{{value}}" role="search" method="GET"><input class="figh-search__input js-figh-search__input" type="text" placeholder="Recherchez parmi les actualit&eacute;s du Figaro" title="Recherchez parmi les actualit&eacute;s du Figaro" name="value"/><button class="figh-search__btn js-figh-search__btn">Rechercher</button></form></div><div class="figh__full full"><div class="figh__left-side figh-menu"><button class="figh-menu-item figh-menu-item--nav figh-menu-item--dark js-figh-open-close-nav js-figh-btn-nav" data-selected="false" title="Voir les rubriques"><span class="figh-menu-item__container figh-menu-item__container--no-border"><span class="burger" aria-hidden="true"><i></i><span class="figh-reader-icon__count js-figh-reader-icon__global-count figh-reader-icon__count--hide"></span></span><br/>Menu</span></button><button class="figh-menu-item figh-menu-item--dark js-figh-reader" data-selected="false"><span class="figh-menu-item__container figh-menu-item__container--no-border"><span class="figh-icon--big figh-icon-endirect"><span class="figh-reader-icon__count js-figh-reader-icon__global-count figh-reader-icon__count--hide"></span></span><br/>En direct</span></button></div><div class="figh__right-side figh-menu"><button class="figh-menu-item js-figh-menu-item__social"><i class="figh-icon-angle-up" aria-hidden="true"></i><span class="figh-menu-item__container figh-menu-item__container--no-border"><i class="figh-icon--big figh-icon-suivre" aria-hidden="true"></i><br/>Suivre</span></button><button class="figh-menu-item js-figh-search"><i class="figh-icon-angle-up" aria-hidden="true"></i><span class="figh-menu-item__container"><i class="figh-icon--big figh-icon-recherche" aria-hidden="true"></i><br/>Recherche</span></button><a class="figh-menu-item figh-connexion js-figh-signin figh-connexion--connecting"><i class="figh-icon-angle-up" aria-hidden="true"></i><span class="figh-menu-item__container"><i class="figh-icon--big figh-icon-connexion" aria-hidden="true"></i></span></a></div><div class="figh__middle-side middle_side"><div class="figh-logo"><a href="http://www.lefigaro.fr/politique/le-scan/"><img class="figh-logo__desktop" src="//a.f1g.fr/h/assets-components/header-footer/scan-politique-desktop.png" alt="Scan Politique"/><img class="figh-logo__tablette" src="//a.f1g.fr/h/assets-components/header-footer/scan-politique-tablette.png" alt="Scan Politique"/><img class="figh-logo__mobile" src="//a.f1g.fr/h/assets-components/header-footer/scan-politique-mobile.svg" alt="Scan Politique"/></a></div><div class="figh-keyword"><ul class="figh-keyword__list"><li data-id="17433" class="figh-keyword__item"><a class="figh-keyword__link figh-keyword__link--highlighted" href="http://www.lefigaro.fr/elections/legislatives/"> L&eacute;gislatives </a></li><li data-id="17426" class="figh-keyword__item"><a class="figh-keyword__link" href="http://www.lefigaro.fr/politique/le-scan/citations"> Verbatims </a></li><li data-id="17427" class="figh-keyword__item"><a class="figh-keyword__link" href="http://www.lefigaro.fr/politique/le-scan/coulisses"> Coulisses </a></li><li data-id="17428" class="figh-keyword__item"><a class="figh-keyword__link" href="http://www.lefigaro.fr/politique/le-scan/decryptages"> D&eacute;cryptages </a></li><li data-id="17429" class="figh-keyword__item"><a class="figh-keyword__link" href="http://www.lefigaro.fr/politique/le-scan/couacs"> Couacs </a></li><li data-id="17430" class="figh-keyword__item"><a class="figh-keyword__link" href="http://www.lefigaro.fr/politique/le-scan/insolites"> Insolites </a></li><li data-id="17431" class="figh-keyword__item"><a class="figh-keyword__link" href="http://le-scan-politique.lefigaro.fr/page/lexplicateur"> L&#039;explicateur </a></li><li data-id="17432" class="figh-keyword__item"><a class="figh-keyword__link" href="http://le-scan-politique.lefigaro.fr/page/les-tops-tweets"> Les Top Tweets </a></li></ul><a class="figh-keyword__link figh-keyword__link--more js-figh-open-close-nav" title="Afficher le menu"><i class="figh-icon-custom-plus" aria-hidden="true"></i></a></div><script>;function onClickScript(c){switch(c){default:break}};</script></div></div></div><div class="collapsed_content figh-collapse--with-abo"><button class="btn js-figh-open-close-nav figh-collapse__nav-btn"><i class="burger" aria-hidden="true"><i></i></i><span>Menu</span></button><div class="figh-collapse__logo"><a href="http://www.lefigaro.fr/politique/le-scan/"><img class="figh-logo--collapse" src="//a.f1g.fr/h/assets-components/header-footer/scan-politique-collapse.png" alt="Scan Politique"/></a></div><div class="figh-abo-container"><a href="http://premium.lefigaro.fr" class="figh-abo__link">Premium</a><a href="https://boutique.lefigaro.fr/abonnements/premium/1e99c?origine=VWH16002&amp;ga_source=header_reduit" class="figh-abo-button">Abonnez-vous</a></div></div><div id="left-panel" class="figh-left-panel"><div class="mobile-only js-figh-mobile-menu figh-mobile-menu figh-mobile-menu--collapsed"><a class="figh-mobile-menu__item js-figh-mobileburger figh-mobile-menu__item--3"><span class="figh-mobile-menu__item-container"><i class="burger"><i></i></i><br/>Menu</span></a><a class="figh-mobile-menu__item js-figh-reader figh-mobile-menu__item--3"><span class="figh-mobile-menu__item-container"><i class="figh-icon--big figh-icon-endirect"><span class="figh-reader-icon__count js-figh-reader-icon__global-count figh-reader-icon__count--hide"></span></i><br/>En direct</span></a><a class="figh-mobile-menu__item figh-connexion js-figh-signin figh-connexion--connecting figh-mobile-menu__item--3" aria-label="Connexion/D&eacute;connexion"><span class="figh-mobile-menu__item-container figh-menu-item__container--no-border" aria-label="Connexion"><i class="figh-icon--big figh-icon-connexion" aria-hidden="true"></i></span></a></div><div id="left_menu" class="js-nav-collapsed figh-nav" data-expanded="false" data-id="1" data-level="0"><div class="mobile-only figh-mobile-search"><form class="figh-search__container js-figh-search__container" action="http://recherche.lefigaro.fr/recherche/{{value}}" role="search" method="GET"><input class="figh-search__input js-figh-search__input--mobile" type="text" title="Recherchez parmi les actualit&eacute;s du Figaro" placeholder="Recherchez parmi les actualit&eacute;s du Figaro" name="value"/> null <button class="figh-search__btn js-figh-search__btn" aria-label="Rechercher"><i class="figh-icon-search" aria-hidden="true"></i></button></form></div><nav class="js-figh-treenode-container figh-treenode"><ul class="figh-treenode__level figh-treenode__level--0"><li data-id="2" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/" class="figh-treenode__link figh-treenode__link--upper figh-treenode__link--bold" title="Actualit&eacute;">Actualit&eacute;</a><span class="figh-treenode__expander figh-icon-angle-up figh-treenode__expander--open" aria-label="D&eacute;plier/replier"></span></div><ul class="figh-treenode__level figh-treenode__level--1"><li data-id="1473" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://premium.lefigaro.fr" class="figh-treenode__link" title="Le Figaro Premium">Le Figaro Premium</a></div></li><li data-id="1400" class="figh-treenode__item figh-treenode__item--hide-premium"><div class="figh-treenode__item-wrapper"><a href="https://boutique.lefigaro.fr/abonnements/premium/1e99c?origine=VWH16004&amp;ga_source=lien_premium_burger_haut" class="figh-treenode__link figh-treenode__link--ad" target="_blank" rel="noopener" title="Abonnez-vous (nouvelle fen&ecirc;tre)"><span class="figh-icon-ad" style="background-color:#d6a461"></span> Abonnez-vous</a></div></li><li data-id="4" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/international/" class="figh-treenode__link" title="International">International</a></div></li><li data-id="5" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/" class="figh-treenode__link" title="Politique">Politique</a></div></li><li data-id="6" class="figh-treenode__item figh-treenode__item--root-node"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--root-node figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/politique/le-scan/" class="figh-treenode__link figh-treenode__link--root-node figh-treenode__link--bold" title="Le Scan Politique">Le Scan Politique</a><span class="figh-treenode__expander figh-icon-angle-up figh-treenode__expander--root-node figh-treenode__expander--open" aria-label="D&eacute;plier/replier"></span></div><ul class="figh-treenode__level figh-treenode__level--2"><li data-id="7" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://le-scan-politique.lefigaro.fr/page/lexplicateur" class="figh-treenode__link" title="L&#039;explicateur">L&#039;explicateur</a></div></li><li data-id="8" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/citations/" class="figh-treenode__link" title="Les verbatims">Les verbatims</a></div></li><li data-id="9" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/coulisses/" class="figh-treenode__link" title="Les coulisses">Les coulisses</a></div></li><li data-id="10" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/decryptages/" class="figh-treenode__link" title="Les d&eacute;cryptages">Les d&eacute;cryptages</a></div></li><li data-id="11" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/directs/" class="figh-treenode__link" title="Les directs">Les directs</a></div></li><li data-id="12" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/couacs/" class="figh-treenode__link" title="Les couacs">Les couacs</a></div></li><li data-id="13" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/politique/le-scan/insolites/" class="figh-treenode__link" title="Les insolites">Les insolites</a></div></li><li data-id="14" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://le-scan-politique.lefigaro.fr/page/les-tops-tweets" class="figh-treenode__link" title="Les Top Tweets">Les Top Tweets</a></div></li><li data-id="15" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://le-scan-politique.lefigaro.fr/page/les-documents" class="figh-treenode__link" title="Les documents">Les documents</a></div></li><li data-id="16" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://le-scan-politique.lefigaro.fr/page/sondages" class="figh-treenode__link" title="Les sondages">Les sondages</a></div></li></ul></li><li data-id="1641" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/elections/legislatives/" class="figh-treenode__link" title="&Eacute;lections l&eacute;gislatives">&Eacute;lections l&eacute;gislatives</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="19" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/actualite-france/" class="figh-treenode__link" title="Soci&eacute;t&eacute;">Soci&eacute;t&eacute;</a></div></li><li data-id="533" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/vox/" class="figh-treenode__link" title="Figaro Vox">Figaro Vox</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="514" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://etudiant.lefigaro.fr" class="figh-treenode__link" title="Figaro Etudiant">Figaro Etudiant</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="21" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/sciences/" class="figh-treenode__link" title="Science &amp; Environnement">Science &amp; Environnement</a></div></li><li data-id="20" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/secteur/high-tech/" class="figh-treenode__link" title="Tech &amp; Web">Tech &amp; Web</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="95" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/lefigaromagazine/" class="figh-treenode__link" title="Figaro Magazine">Figaro Magazine</a></div></li><li data-id="513" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://sante.lefigaro.fr" class="figh-treenode__link" title="Figaro Sant&eacute;">Figaro Sant&eacute;</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="540" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://video.lefigaro.fr" class="figh-treenode__link" title="Figaro Live / vid&eacute;os">Figaro Live / vid&eacute;os</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="1158" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/blogs/" class="figh-treenode__link" title="Blogs">Blogs</a></div></li><li data-id="1161" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/photos/" class="figh-treenode__link" title="Diaporamas">Diaporamas</a></div></li><li data-id="1160" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/dossier/fig-data-infographies-datavisualisation" class="figh-treenode__link" title="Data &amp; infographies">Data &amp; infographies</a></div></li><li data-id="1224" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://www.lefigaro.fr/actualites-a-la-une/" class="figh-treenode__link" title="Toute l&#039;actu">Toute l&#039;actu</a></div></li><li data-id="1766" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="http://partner.lefigaro.fr/article/les-solutions-&eacute;nerg&eacute;tiques-innovantes-au-service-de-la-transformation-des-territoires-et-des-23" class="figh-treenode__link figh-treenode__link--ad" target="_blank" rel="noopener" title="Avenir et Energie (nouvelle fen&ecirc;tre)"><span class="figh-icon-ad" style="background-color:#147dc1"></span> Avenir et Energie</a></div></li><li data-id="1778" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="https://renault-talisman.lefigaro.fr/?utm_source=figaro&amp;utm_medium=menuburger&amp;utm_campaign=talisman" class="figh-treenode__link figh-treenode__link--ad" target="_blank" rel="noopener" title="Berlines fran&ccedil;aises (nouvelle fen&ecirc;tre)"><span class="figh-icon-ad" style="background-color:#147dc1"></span> Berlines fran&ccedil;aises</a></div></li><li data-id="1751" class="figh-treenode__item"><div class="figh-treenode__item-wrapper"><a href="https://bilan-patrimonial.lefigaro.fr/?utm_source=figaro&amp;utm_medium=menuburger&amp;utm_campaign=banquepostale" class="figh-treenode__link figh-treenode__link--ad" title="Bilan patrimonial"><span class="figh-icon-ad" style="background-color:#147dc1"></span> Bilan patrimonial</a></div></li></ul></li><li data-id="96" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/economie/" class="figh-treenode__link figh-treenode__link--upper" title="Economie">Economie</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="157" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://sport24.lefigaro.fr/" class="figh-treenode__link figh-treenode__link--upper" title="Sport">Sport</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="252" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/culture/" class="figh-treenode__link figh-treenode__link--upper" title="Culture">Culture</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="354" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/lifestyle/" class="figh-treenode__link figh-treenode__link--upper" title="Lifestyle">Lifestyle</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="417" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://madame.lefigaro.fr/" class="figh-treenode__link figh-treenode__link--upper" title="Madame">Madame</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="464" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/mon-figaro" class="figh-treenode__link figh-treenode__link--upper" title="Le Figaro Premium">Le Figaro Premium</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="465" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/services/" class="figh-treenode__link figh-treenode__link--upper" title="Services">Services</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li><li data-id="472" class="figh-treenode__item"><div class="figh-treenode__item-wrapper figh-treenode__item-wrapper--has-child js-arrow-event"><a href="http://www.lefigaro.fr/" class="figh-treenode__link figh-treenode__link--upper" title="Tous les sites du Figaro">Tous les sites du Figaro</a><span class="figh-treenode__expander figh-icon-angle-up" aria-label="D&eacute;plier/replier"></span></div></li></ul></nav></div><div id="reader-block" class="figh-reader" data-expanded="false" aria-live="polite"><div class="figh-reader__container"></div></div><div id="signin-block" class="figh-sign-in js-figh-signin-block mobile-only"><div class="figh-sign-in__container"></div></div></div><div id="right-panel" class="figh-right-panel figh-logged figh-logged--collapsed"><div class="figh-logged__container"><ul class="figh-user-menu-liste1 figh-logged__list figh-logged__list--bold"></ul><ul class="figh-user-menu-liste2 figh-logged__list"></ul><ul class="figh-user-menu-liste3 figh-logged__list"></ul><ul class="figh-user-menu-liste4 figh-logged__list"></ul></div></div><div class="header-placeholder"></div></header><link href="//a.f1g.fr/h/assets-components/header-footer/jquery.ultimate-smartbanner.css" rel="stylesheet"><script id="fig-header-script">var headerRootNodeId = '6'; var headerId = '7'; var treeNodeCacheKiller = '6e664'; var headerLogoNoSvg = '//a.f1g.fr/h/assets-components/header-footer/scan-politique-fallback.png'; var treenode_html_url = '//a.f1g.fr/h/assets-components/header-footer/header-treenode.js'; var headerGaVarName = false; var readerUrl = '\x2F\x2Fa.f1g.fr\x2Fh\x2Fassets\x2Dcomponents\x2Fheader\x2Dfooter\x2F7\x2Dreader.js'; var injectNewMeta = function(name, content) { var eHead = document.getElementsByTagName('head')[0]; if (!eHead) return; var eMeta = document.createElement('meta'); eMeta.setAttribute('name', name); eMeta.setAttribute('content', content); eHead.appendChild(eMeta); return; }; injectNewMeta('apple\x2Ditunes\x2Dapp',"app-id=319557427"); injectNewMeta('apple\x2Ditunes\x2Dapp\x2Dtracking',"https\x3A\x2F\x2Fapp.adjust.com\x2Fi1y8nw"); injectNewMeta('apple\x2Ditunes\x2Dapp\x2Dtab',"app-id=319557427"); injectNewMeta('apple\x2Ditunes\x2Dapp\x2Dtab\x2Dtracking',"https\x3A\x2F\x2Fapp.adjust.com\x2Fi1y8nw"); injectNewMeta('google\x2Dplay\x2Dapp',"app-id=fr.playsoft.lefigarov3"); injectNewMeta('google\x2Dplay\x2Dapp\x2Dtracking',"https\x3A\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dfr.playsoft.lefigarov3\x26hl\x3Dfr"); injectNewMeta('google\x2Dplay\x2Dapp\x2Dtab',"app-id=fr.playsoft.lefigarov3"); injectNewMeta('google\x2Dplay\x2Dapp\x2Dtab\x2Dtracking',"https\x3A\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dfr.playsoft.lefigarov3\x26hl\x3Dfr"); var options = { "title": "Le Figaro", "author": "Soci\u00E9t\u00E9\x20du\x20Figaro", "price": "GRATUIT", "priceText": "", "icon": "//a.f1g.fr/assets-img/favicons/apple-touch-icon-144x144.png", "button": " T\u00E9l\u00E9charger", "appStoreLanguage": "fr", "iphoneConfig": { "title":"Suivez\x20vos\x20personnalit\u00E9s\x20politiques\x20pr\u00E9f\u00E9r\u00E9es\x20dans\x20l\x27application\x20du\x20Figaro","author":"Soci\u00E9t\u00E9\x20du\x20Figaro","price":"Gratuit","icon":"http\x3A\x2F\x2Fa4.mzstatic.com\x2Feu\x2Fr30\x2FPurple3\x2Fv4\x2F52\x2Fc3\x2F53\x2F52c353f0\x2D3a5b\x2D76a9\x2Dfcf7\x2D01184d5f811a\x2Ficon350x350.png"}, "ipadConfig": { "title":"Suivez\x20vos\x20personnalit\u00E9s\x20politiques\x20pr\u00E9f\u00E9r\u00E9es\x20dans\x20l\x27application\x20du\x20Figaro","author":"Soci\u00E9t\u00E9\x20du\x20Figaro","price":"Gratuit","icon":"http\x3A\x2F\x2Fa4.mzstatic.com\x2Feu\x2Fr30\x2FPurple3\x2Fv4\x2F52\x2Fc3\x2F53\x2F52c353f0\x2D3a5b\x2D76a9\x2Dfcf7\x2D01184d5f811a\x2Ficon350x350.png"}, "androidConfig": { "title":"Suivez\x20vos\x20personnalit\u00E9s\x20politiques\x20pr\u00E9f\u00E9r\u00E9es\x20dans\x20l\x27application\x20du\x20Figaro","author":"Soci\u00E9t\u00E9\x20du\x20Figaro","price":"Gratuit","icon":"http\x3A\x2F\x2Fa4.mzstatic.com\x2Feu\x2Fr30\x2FPurple3\x2Fv4\x2F52\x2Fc3\x2F53\x2F52c353f0\x2D3a5b\x2D76a9\x2Dfcf7\x2D01184d5f811a\x2Ficon350x350.png"}, "androidTabsConfig": { "title":"Suivez\x20vos\x20personnalit\u00E9s\x20politiques\x20pr\u00E9f\u00E9r\u00E9es\x20dans\x20l\x27application\x20du\x20Figaro","author":"Soci\u00E9t\u00E9\x20du\x20Figaro","price":"Gratuit","icon":"http\x3A\x2F\x2Fa4.mzstatic.com\x2Feu\x2Fr30\x2FPurple3\x2Fv4\x2F52\x2Fc3\x2F53\x2F52c353f0\x2D3a5b\x2D76a9\x2Dfcf7\x2D01184d5f811a\x2Ficon350x350.png"}, "windowsPhoneConfig": { "title":"Voulez\x2Dvous\x20installer\x20l\x27application\x20\x22\x22\x20\x3F",}, "windowsRtConfig": { "title":"Voulez\x2Dvous\x20installer\x20l\x27application\x20\x22\x22\x20\x3F",} }; window.loadSmartbanner = true;</script>

        
                                                                                                    <div class=" "
    data-figtag="mban_atf"
     data-fidji-id="" data-fidji-source="">
</div>                                                                                <div class=" "
    data-figtag="habillage"
     data-fidji-id="" data-fidji-source="">
</div>                                                        
                <div class="fig-page " id="fig-page" data-section="Actu">
    <div class="fig-page__container" data-layout-container>
                        
                    <div class="fig-page__main-content">
        
                    <div class="fig-flash" data-component="flash-article" data-section="actu">
                <ul class="fig-flash__list" aria-live="polite">
            <li class="fig-flash__item fig-flash__item--active fig-flash__item--normal fig-flash__item--actu">
                                    <a href="http://www.lefigaro.fr/flash-actu/" class="fig-flash__label">
                        Le Flash <span class="fig-flash__section">actu</span>
                    </a>
                
                <a href="http://www.lefigaro.fr/flash-actu/2018/03/01/97001-20180301FILWWW00238-afghanistan-les-usa-maintiendront-la-pression-sur-les-talibans.php" class="fig-flash__content">
                    <span class="fig-flash__date">16:17</span>
                    Afghanistan: les USA maintiendront la pression sur les talibans 
                </a>
            </li>
        </ul>

        <div class="fig-flash__nav">
            <button class="fig-flash__nav-item fig-flash__nav-item--disabled js-fig-flash__nav-item--prev" aria-label="Voir les flash plus anciens" aria-disabled="true" disabled><span aria-hidden="true">‹</span></button>
            <button class="fig-flash__nav-item js-fig-flash__nav-item--next" aria-label="Voir les flash plus récents"><span aria-hidden="true">›</span></button>
                            <a href="http://www.lefigaro.fr/flash-actu/" class="fig-flash__more">Tout le flash</a>
                    </div>
    </div>


        <div class="fig-page__col-left fig-page__col-left--padded fig-type-content">
                                    <nav aria-label="Breadcrumb">
    <ol class="fig-breadcrumb">
                                    
                                                    
                
                <li class="fig-breadcrumb__item">
                                            <a href="http://www.lefigaro.fr/">
                            <span class="a11y-hidden">Home</span>
                        </a>
                                    </li>
                            
                
                
                <li class="fig-breadcrumb__item fig-breadcrumb__item--current">
                                            <a href="http://www.lefigaro.fr/politique/le-scan">
                            <span>Le Scan</span>
                        </a>
                                    </li>
                        </ol>
</nav>
            
    <article class="fig-content" data-app-id="sdv" data-fidji-source="lefigaro.fr" data-fidji-id="20180301ARTFIG00158" data-comment-count="851" data-comment-closed="false" data-is-premium="false">
                

                <h1 class="fig-main-title"     >Marine Le Pen mise en examen pour des tweets diffusant des exécutions de Daech</h1>

                
<ul class="fig-content-metas">
            <li class="fig-content-metas__authors">Par&nbsp;
                                                                    <a class="fig-content-metas__author" href="http://plus.lefigaro.fr/page/csapin-0">
            <img class="fig-content-metas__img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy44LjEgKDI5Njg3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT45QkEzMjREQi0yN0EyLTQ4QTctQTAxNi1BQUM4RDQ2OTMyNUE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGljbGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUlRJQ0xFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjAwMDAwMCwgLTQ5MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImF1dGV1ciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMwLjAwMDAwMCwgNDg4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb24tbWluaS1maWdhcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJmcGx1bWUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQsMTEuODk5NiBDMTQsMTMuMDU5NTcyNSAxMy4wNTkyOTY4LDE0IDExLjg5OTU3NiwxNCBMMi4wOTk5NDQwMSwxNCBDMC45NDA1NDMyNTgsMTQgMCwxMy4wNTk1NzI1IDAsMTEuODk5NiBMMCwwIEwxMS44OTk1NzYsMCBDMTMuMDU5Mjk2OCwwIDE0LDAuOTQwMjY3NDU5IDE0LDIuMTAwMjQwMDMgTDE0LDExLjg5OTYiIGlkPSJGaWxsLTEiIGZpbGw9IiMzNzc1Q0EiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguOTgyMzUyOTQsOSBMOC45NjY5ODI5Miw4Ljk5MTkyOTU3IEM4Ljk2Mzc1NzEyLDguOTg4MjYxMTkgOC42NTQwNzk3LDguNjMzNDA2NyA4LjAwOTEwODE2LDguMDU5MTgzMTcgTDgsOC4wMjU2Nzg2NSBMOC4wMjE0NDIxMyw4LjAwNDQwMjA1IEw4LjEyMTI1MjM3LDggTDguMTM1Mjk0MTIsOC4wMDUzODAyOSBDOC40ODIzNTI5NCw4LjMxNTQ4MDU2IDguNjQ1MTYxMjksOC41MTUwNDAzNSA4Ljg3MDAxODk4LDguNzkxMzkxNTQgQzguOTEwODE1OTQsOC44NDAzMDMyNSA4Ljk1Mjk0MTE4LDguODkyMTQ5NjcgOC45OTg2NzE3Myw4Ljk0NzQxOTkxIEw5LDguOTg5NzI4NTQgTDguOTgyMzUyOTQsOSBNOC42MjU5MDk3NSw4IEw4LDggTDgsOC4yOTY5ODczNCBDOC40MDEwMTg5Miw4LjQ3MzY0NjY4IDguNTk1MDUwOTUsOC42MTg1NzUwOCA4LjU5Njc5NzY3LDguNjIwMDAxMTkgQzguNjAyMzI4OTcsOC42MjM3NDQ3MyA5LjI0OTQ5MDU0LDkuMDQyNDg2MTggOS43ODAyMDM3OCw5LjYzODA2NTI0IEM5Ljk3MDE2MDEyLDkuODUwNzMzODUgMTAuMTA1Mzg1Nyw5Ljk4MzM2MjA1IDEwLjIyNDc0NTMsMTAuMTAwNDgxMyBDMTAuNDMzNDc4OSwxMC4zMDUxMjgxIDEwLjYxNDg0NzIsMTAuNDgyNjc4NyAxMSwxMSBDMTAuNjgxMjIyNywxMC40Nzc1MDkxIDEwLjIzNTUxNjcsOS45MTEzNDM1MSA5LjU2ODcwNDUxLDkuMTc1NDcwOTEgQzkuMjYyMDA4NzMsOC44MzY1OTE2IDguOTE5Nzk2MjIsOC40MTAzNjMwNiA4LjYyNTkwOTc1LDgiIGlkPSJGaWxsLTIiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjY4NDMzMjgsOS41NTUxODA0MSBDMTAuMTE2MTQ5LDkuMDgzMzUwMTMgOS40MDQxMTI1NCw4LjQ4MTA1MjIxIDguOTM1NTU4ODEsOC4wMDY1MDA3MSBMOC45MTkzODM5OCw4IEw4Ljc3ODI4NDQ0LDggTDguNzU5MTg0MzgsOC4wMTEwMzYwOCBMOC43NjI0NTM3Niw4LjAzMDk5MTc0IEM5LjExNjQwNzEyLDguMzg3Nzc0NjQgOS41MzMxNjcsOC43NjEzMzg0NCA5LjkwNTcwNDIxLDkuMDU2NTkxNDEgQzEwLjY5Mzk2ODksOS42ODA2NTkxNCAxMS4yMjA4NTUyLDEwLjE2MDgwNDMgMTEuNTk3Njk0MiwxMC42MDM5MTA1IEMxMS4xNDIzOTAxLDEwLjE2NTE4ODUgMTAuOTI3OTg3NiwxMC4wMTQ2MTQgMTAuNjgxMjM1NSw5Ljg0MTA2MDI3IEMxMC41NDAxMzU5LDkuNzQxNzM1NTQgMTAuMzgwMjgwNSw5LjYyOTI1ODIxIDEwLjE1NTcyNTcsOS40NDg5MDE0MyBDOS41MjgzNDg5Niw4Ljk0MzgxMTczIDguNzYzMzE0MTIsOC41ODg2OTE4IDguNzU2Nzc1MzYsOC41ODU1MTcwMyBDOC43NTQ1Mzg0Miw4LjU4NDMwNzYgOC41MTc5Mzg1Nyw4LjQ1NzQ2ODI1IDguMDI4MzkxOTgsOC4zMDQzMjM3MyBMOC4wMDg3NzU3LDguMzA2ODkzNzcgTDgsOC4zMjIxNjI4NyBMOCw4LjUyMTI2NTg3IEw4LjAxMzc2NTgxLDguNTM4OTUzODQgQzguNjYyOTk1NzgsOC43NDQ4NTk5MSA4Ljk2MjQwMjEzLDguODkzNzcxNDIgOC45NjUzMjczNyw4Ljg5NTI4MzIxIEM4Ljk3NDc5MTM2LDguODk5ODE4NTggOS45MzY1MDUyMSw5LjM3OTk2MzcyIDEwLjYzNzM1Nyw5Ljk3MTY3OTEgQzExLjIyODQyNjQsMTAuNDcxNjI4NyAxMS4zNzM0ODM2LDEwLjYwOTIwMTggMTEuNTMxMjc0MiwxMC43NjQzMTE2IEMxMS41NDMxNDcyLDEwLjc3MTU2ODIgMTEuODI5MTMxOSwxMC45NDY3ODQ5IDExLjk3MjI5NjMsMTAuOTk4NjM5NCBMMTEuOTgwMzgzNywxMSBMMTEuOTk1MzU0LDEwLjk5NDcwODcgTDEyLDEwLjk3NDI5OTUgQzExLjk5NzU5MSwxMC45NjkzMTA2IDExLjczOTEzNzksMTAuNDI5OTAzMiAxMC42ODQzMzI4LDkuNTU1MTgwNDEiIGlkPSJGaWxsLTMiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMTIxMjUyMzcsOCBMOC4wMjE0NDIxMyw4LjAwNDQwMjA1IEw4LDguMDI1Njc4NjUgTDguMDA5MTA4MTYsOC4wNTkxODMxNyBDOC42NTQwNzk3LDguNjMzNDA2NyA4Ljk2Mzc1NzEyLDguOTg4MjYxMTkgOC45NjY5ODI5Miw4Ljk5MTkyOTU3IEw4Ljk4MjM1Mjk0LDkgTDksOC45ODk3Mjg1NCBMOC45OTg2NzE3Myw4Ljk0NzQxOTkxIEM4Ljk1Mjk0MTE4LDguODkyMTQ5NjcgOC45MTA4MTU5NCw4Ljg0MDMwMzI1IDguODcwMDE4OTgsOC43OTEzOTE1NCBDOC42NDUxNjEyOSw4LjUxNTA0MDM1IDguNDgyMzUyOTQsOC4zMTU0ODA1NiA4LjEzNTI5NDEyLDguMDA1MzgwMjkgTDguMTIxMjUyMzcsOCIgaWQ9IkZpbGwtNCIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCw0IEwxMiw0IEwxMiw2LjI0OTAyOTQyIEwxMC4wNDMzNTMxLDYuMjQ5MDI5NDIgTDEwLjA0MzM1MzEsNS44NjY4MzQyMyBDMTAuMDQzMzUzMSw1LjY2MzI0ODEzIDkuOTA4NzIxNDIsNS40OTA2MDgzOCA5LjYwODQ2NzQsNS40OTA2MDgzOCBMNy44MzY1NzkxNyw1LjQ5MDYwODM4IEw3LjgzNjU3OTE3LDYuNzUzMTI0OTMgTDkuNDc3MDUzMzQsNi43NTMxMjQ5MyBMOS40NzcwNTMzNCw4LjExMDUyMjY1IEw3LjgzNjU3OTE3LDguMTEwNTIyNjUgTDcuODM2NTc5MTcsOS4xMjI0ODM3OSBDNy44MzY1NzkxNyw5LjQwMTAwMDg4IDcuOTY2Mjk5NzUsOS41MTU2NzUxNCA4LjM1ODAwMTY5LDkuNTE1Njc1MTQgTDguOTc5MzM5NTQsOS41MTU2NzUxNCBMOC45NzkzMzk1NCwxMSBMNCwxMSBMNCw5LjUxNTY3NTE0IEw0LjY1ODQyNTA2LDkuNTE1Njc1MTQgQzQuODQ4NDMzNTMsOS41MTU2NzUxNCA0Ljk4MTU0MTA3LDkuMzk2NDQ1MzIgNC45ODE1NDEwNyw5LjIyMDE5MjU1IEw0Ljk4MTU0MTA3LDUuODU2NzgwNTkgQzQuOTgxNTQxMDcsNS42NDUzNDAxIDQuOTQzNjA3MTEsNS40OTA2MDgzOCA0LjYyOTgwNTI1LDUuNDkwNjA4MzggTDQsNS40OTA2MDgzOCBMNCw0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjAyNzk0ODg0LDMgQzIuMDUxNzkyMiwzLjY2OTg1NDIxIDIuMjYyNzUwNjcsNC4zOTk3NDkxOCAyLjI2Mjc1MDY3LDQuMzk5NzQ5MTggQzIuMjYwMjI0MjIsNC4zOTg0OTUwNiAyLjI1Nzg1NTY4LDQuMzk3MjQwOTUgMi4yNTU0ODcxMyw0LjM5NTk4NjgzIEMyLjI1OTExODksNC40MDk2MjUzMyAyLjI2Mjc1MDY3LDQuNDIzNDIwNiAyLjI2NjM4MjQ0LDQuNDM3MjE1ODYgTDIuMjYwNTQwMDMsNC40NTYzNDExMiBMMi4yNDEyNzU4Niw0LjQ2MDQxNjk5IEMyLjIzNjY5NjY3LDQuNDU4ODQ5MzUgMi4xNDIyNzA2NSw0LjQyNTc3MjA2IDIsNC4yOTczODIwMyBDMi4wMTI3OTAxNSw0LjM0MjY4Njk0IDIuMDI1ODk2MSw0LjM4NzA1MTI2IDIuMDM5NjMzNjYsNC40MzA2MzE3NiBDMi4yMzIxMTc0OCw0LjkxNjc1ODExIDIuNzQ5ODgxNTcsNi4wNDQ5OTEzOCAzLjUzNzUwMTk3LDYuNDM1ODA0OTkgTDMuNTQ3NzY1NjcsNi40NTc1OTUyMyBMMy41Mjg2NTk0LDYuNDcyMzMxMDkgQzMuNTE0NzYzOTMsNi40NzIzMzEwOSAzLjIyMjE2OTU5LDYuNDY5NTA5MzMgMi45NDE1NzU4Nyw2LjM1NzEwOTI2IEMzLjEyOTE2NDY5LDYuNTM1ODIwNjYgMy4zOTgwNzM1OCw2LjczMDk5MjMyIDMuNjcyNTA5MDgsNi45MTE4OTg0MiBDMy45NjYyMDg3NSw3LjA5OTg1ODkxIDQuMzYwODA4NDYsNy4zMjk1MTg3MyA0Ljg4NzU3MzAzLDcuNTk5NjIzNzcgTDQuODk3OTk0NjMsNy42MTc2NTE2NyBMNC44ODU2NzgxOSw3LjYzNDczODk5IEM0Ljg4MzMwOTY1LDcuNjM1ODM2MzQgNC44MjIyMDExNyw3LjY1OTgyMTI5IDQuNjg4Mjk5MzgsNy42NTk4MjEyOSBDNC41OTIyOTQzMyw3LjY1OTgyMTI5IDQuNDg0Mjg4NjUsNy42NDc3NTA0MyA0LjM2NjE3NzE3LDcuNjIzOTIyMjQgQzQuNDUwMTgxNTksNy42Nzg0NzYyNSA0LjUzMjkyMjc5LDcuNzMwNTIyMDMgNC42MTQwODQ5NSw3Ljc3OTkwMjgxIEM0LjcyNDYxNzA5LDcuODQ1NDMwMzIgNC44NTU4MzQ1Miw3LjkyMDk5MDc1IDUsOCBMNSw2LjUwOTMyNzQ4IEM1LDYuMjk4MzIyNjIgNC45NjQ2Mjk3Miw2LjE0MzkwOTcgNC42NzIwMzUzNyw2LjE0MzkwOTcgTDQuMDg0NzkzOTQsNi4xNDM5MDk3IEw0LjA4NDc5Mzk0LDUuNzE3OTgwODcgQzMuMjAwODUyNjgsNS4wODgyNTgzNSAyLjUzMTE4NTg1LDMuODU3NjU3OTQgMi4zMzE1OTY0LDMuMzExMzM0MDYgQzIuMTkyOTU3NTIsMy4xODA0MzU4IDIuMDkwNjM2MzUsMy4wNzI1ODE5MSAyLjAyNzk0ODg0LDMiIGlkPSJGaWxsLTYiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQsNSBMNCw1LjQzMzgxNzY2IEw0LjY5MDU3OTM1LDUuNDMzODE3NjYgQzUuMDM0NjYyMDUsNS40MzM4MTc2NiA1LjA3NjI1NjUsNS41OTEwOTA1MyA1LjA3NjI1NjUsNS44MDYwMDM1MSBMNS4wNzYyNTY1LDcuMzI0Mjg1NDkgQzUuMjI5MjY0NjcsNy4zOTY5MzQzOCA1LjM5NDcxNDA0LDcuNDcyMjk3NjIgNS41NjYyOTExNiw3LjU0NTU4NTE4IEM2LjA0Nzk2OTc5LDcuNzQ2NjA3MDYgNi40MzY4MDM2Niw3Ljg2ODkxMjY2IDYuNjg3NDg0NTMsNy45Mzc3Mjk1MiBDNi43OTU1NTU4Myw3Ljk2NDIzNDM5IDYuOTAwMjg0NzIsNy45ODU0NzAyMiA3LDggTDYuOTk0NDI5MzEsNS43NzE5OTQyNSBDNi45OTQ0MjkzMSw1Ljc3MTk5NDI1IDYuOTQzNTUwMzgsNS42NjU0OTU3NyA2LjgzNDczNjMyLDUuNDk5OTIwMTcgTDYuODM3NTIxNjYsNS41MzM2MTAwOSBMNi44NDc5MjAyOCw1LjUzMjgxMTc1IEw2Ljk3MTIxODEyLDYuNzY1MTI4NTMgTDYuOTc4Mjc0MzMsNi43NzI5NTIyNiBMNi45ODI1NDUxOCw2Ljc4MzMzMDY3IEw2Ljk5MDM0NDE0LDYuODg3Mjc0NDcgTDYuOTc0NTYwNTMsNi45MDc1NTIyOSBMNi45Njc2OTAwMiw2LjkwODUxMDMgTDYuOTQ4MDA2OTMsNi44OTg5MzAyMyBDNi44OTMyMjg1Miw2LjgyMTQ5MTMgNi4zNTQzNTc1MSw2LjExNTEyMDU1IDQuMzI0OTU2NjcsNS4xNzU0NzUwMSBDNC4yMTQxMDAwMiw1LjEyNDIyMTYyIDQuMTA1ODQzMDMsNS4wNjUzMDQxNyA0LDUiIGlkPSJGaWxsLTciIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQsNCBMNC4wNTUxMTE2LDQuNDYzNjU2OTMgQzQuMTE3NjYzMjcsNC41MjA2MDU4OCA0LjE4NDc2MTY0LDQuNTc3NTU0ODMgNC4yNTU1ODAwNSw0LjYzMzcxNjkzIEw0LjE5MzU3OTUsNC4xMjMyNDE4NiBMNC4yMjc0NzMxMyw0LjEyMTA3OCBMNC4yOTMxOTM3Miw0LjY2MzcxNTk0IEM0LjM1NTQ2OTgzLDQuNzExNzE0MzcgNC40MjA5MTQ4NSw0Ljc1ODkyNTk0IDQuNDg5MjUzMjQsNC44MDQ5NTcyMSBMNC40MjAyMjU5Niw0LjI0MDM4NTU2IEw0LjQ1Mzk4MTgxLDQuMjM4MjIxNyBMNC41MjY0NTM1Nyw0LjgyOTQ0ODIxIEM0LjU4NzIxNDExLDQuODY5MTg0NjIgNC42NTAwNDEzMyw0LjkwNzY0MjM3IDQuNzE1MzQ4NTgsNC45NDQ3MjMxMiBMNC42NDQyNTQ2Miw0LjMzNDUxMzYyIEw0LjY3ODE0ODI1LDQuMzMyMzQ5NzYgTDQuNzUxOTk3OCw0Ljk2NTc3MTYxIEM0Ljc3Mjk0MDIsNC45NzczNzc3OSA0Ljc5NDE1ODE3LDQuOTg4Nzg3MjUgNC44MTU1MTM5Miw1IEw0LjgxNTUxMzkyLDQuNDE4ODA1OTQgTDUsNC40MTg4MDU5NCBDNC43OTE5NTM3MSw0LjM1NDY3NjkgNC41MjY3MjkxMyw0LjI2MDk0MjI2IDQuMjY2NDY0NTksNC4xMzU2MzQ5IEM0LjE3MjQ5OTMxLDQuMDg5NzAxOTggNC4wODQwNDUxOSw0LjA0NDU1NTkyIDQsNCBNNCwzIEwzLjk4MzI5NTQ1LDMuNjMzMjk3NjQgQzMuOTU3OTU0NTUsMy43NTMyMTE5OSAzLjkzMDE3MDQ1LDMuODc2MzM4MzMgMy45LDQgTDMuOTIxNDIwNDUsMy4yMDg2MDEgTDMuOTE0MDkwOTEsMy4yMDY4MTY1NiBDMy45NDQxNDc3MywzLjEzNjUwOTY0IDMuOTczMTI1LDMuMDY3MjczMzggNCwzIE0zLDMgTDIuOTkyMzA3NjksMy40MzkxODkxOSBDMi45NjYwMDQ5NiwzLjYxMTkzNjk0IDIuOTM1MjM1NzMsMy44MDE4MDE4IDIuOSw0IEwyLjkxNzA1OTU1LDMuMjQ4ODczODcgQzIuOTQ2NDY0MDIsMy4xNjI4Mzc4NCAyLjk3NDE5MzU1LDMuMDc5OTU0OTUgMywzIE0zLDMgQzIuOTgwNTIyMzksMi45NzgxMTkzNSAyLjk0NzM4ODA2LDIuOTQzMDc0MTQgMi45LDIuOSBMMi45MDc4MzU4MiwyLjk2MDA3MjMzIEMyLjk0MTQxNzkxLDIuOTc0MTc3MjIgMi45NzE5NDAzLDIuOTg3NDE0MSAzLDMiIGlkPSJGaWxsLTgiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsNSBMNi45Njc0Nzg1MSw2LjY2NDg0ODk5IEM2Ljk0MTU5NTAzLDYuNzgwNDExMDcgNi45MTkwNTQ0NCw2Ljg5MjgyNzE4IDYuOSw3IEw2LjkyOTY1NjE2LDUuNDg4MDQ1MyBMNi45MzE5MDA2Nyw1LjQ4NDA2MDQgQzYuOTQzMTIzMjEsNS4zOTMyNDY2NCA2Ljk2NjY2NjY3LDUuMjEzMDg3MjUgNyw1IE02LDUgTDUuOTY0NTc0NjIsNi43Mzk0NTUxIEM1Ljk0MTQ2OTA4LDYuODI3MjQ1MjEgNS45MTk5NDQyMSw2LjkxNDAyNjI0IDUuOSw3IEw1LjkzMjIxNzU3LDUuMzcyMTQ5MzQgQzUuOTUxNzg5ODcsNS4yNTI0NzIyNSA1Ljk3NDQ3Njk5LDUuMTI3MTQ0MyA2LDUgTTQuMjE2MzE2NjQsNCBMNCw0IEw0LDQuODQwNDgwNzYgQzQuMDQ4NjI2ODIsNC44NzE5MTUyMyA0LjA5ODU0NjA0LDQuOTAyMzU0MDMgNC4xNDkyNzMwMiw0LjkzMTkzOTQxIEw0LjA2MjE5NzA5LDQuMDA2Njg1MTYgTDQuMTAxNzc3MDYsNC4wMDM5ODI2NSBMNC4xOTE1OTkzNSw0Ljk1NzM5OTkgQzQuMjYyNjgxNzQsNC45OTczNjg2MSA0LjMzNTcwMjc1LDUuMDM0OTE5MjggNC40MTA1MDA4MSw1LjA3MDYyMDg3IEw0LjMyMTY0NzgyLDQuMTI3MzAyNDcgTDQuMzYxNTUwODksNC4xMjQ0NTc3MiBMNC40NTI2NjU1OSw1LjA5MTEwMzA1IEw0LjQ2OTQ2Njg4LDUuMDk5MDY4MzUgQzQuNTM2ODMzNiw1LjEyOTc5MTYyIDQuNjA0MDM4NzcsNS4xNjE3OTUwNCA0LjY3MTA4MjM5LDUuMTk0NTA5NjQgTDQuNTc1NzY3MzcsNC4yMTI2NDQ5IEw0LjYxNTUwODg5LDQuMjA5NTE1NjggTDQuNzEzMDg1NjIsNS4yMTU0MTg1MyBDNC43ODgyMDY3OSw1LjI1MjQwMDI2IDQuODYyODQzMyw1LjI5MDk0NjU5IDQuOTM2ODMzNiw1LjMyOTc3NzQgTDQuODIwODQwMDYsNC4xNDAxMDM4MyBMNC44NjA1ODE1OCw0LjEzNzExNjg1IEw0Ljk3ODk5ODM4LDUuMzUyMjUwOTEgQzUuMDUzOTU4LDUuMzkyNjQ2MzMgNS4xMjc2MjUyLDUuNDM0MTc5NjUgNS4yMDA0ODQ2NSw1LjQ3NTcxMjk2IEw1LjA4MTkwNjMsNC4yNTg4NzIwNiBMNS4xMjE2NDc4Miw0LjI1NTg4NTA3IEw1LjI0Mjk3MjU0LDUuNTAwMzIwMDMgQzUuMzE3OTMyMTUsNS41NDQxMjkxNSA1LjM5MTQzNzgsNS41ODgyMjI3NCA1LjQ2MzAwNDg1LDUuNjMyODg1MjkgTDUuMzQ0NTg4MDUsNC40MDI4MTYzIEw1LjM4NDQ5MTExLDQuMzk5Njg3MDggTDUuNTA1ODE1ODMsNS42NjAwNTI2MyBDNS41ODEyNjAxLDUuNzA3NzAyMTUgNS42NTU0MTE5NSw1Ljc1NTc3ODM5IDUuNzI2NjU1OSw1LjgwNDQyMzU4IEw1LjYwNzc1NDQ0LDQuNTcyMDc4OCBMNS42NDc4MTkwNiw0LjU2OTM3NjI5IEw1Ljc2OTYyODQzLDUuODM0MTUxMiBDNS44NDk0MzQ1Nyw1Ljg4OTQ4MTU0IDUuOTI2OTc5LDUuOTQ0ODExODkgNiw2IEw1Ljg4MDI5MDc5LDQuODA2MDU5MzEgTDUuOTE2MzE2NjQsNC44MDMzNTY4IEM1Ljc4NzU2MDU4LDQuNjczNjM2MyA1LjY0MDcxMDgyLDQuNTQ1NDgwNDEgNS40NzQ5NTk2MSw0LjQzODM3NTY1IEM0Ljk1MTIxMTYzLDQuMTAxNTU3NSA0Ljc0ODYyNjgyLDQuMDIyMTg5MDMgNC42ODQzMjk1Niw0LjAwMzk4MjY1IEw0LjcwNzEwODI0LDQuMTM1Njk0NDcgTDQuNzAwMTYxNTUsNC4xNTEzNDA1OSBMNC42ODE3NDQ3NSw0LjE1NTAzODc2IEM0LjY3ODE5MDYzLDQuMTU0MDQzMSA0LjQ4OTAxNDU0LDQuMTAzNjkxMDYgNC4yMTYzMTY2NCw0IiBpZD0iRmlsbC05IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljk5NDI2Nzk4LDQgTDQuOTk5MjMzMywzLjk5NzQ1NDI2IEw1LDMuOTg2NDc1NzQgTDQuOTgwMDY1NzIsMy45IEw0Ljk2MDIwNDQ1LDMuOSBDNC45NjExMTcyLDMuOTEzNDQ0NzEgNC45NjEyNjMyMywzLjkyMzk0NTkgNC45NTg3MDc1NiwzLjkyMzk0NTkgQzQuOTU4NDg4NSwzLjkyMzk0NTkgNC45NTgyMzI5MywzLjkyMzg2NjM1IDQuOTU3OTc3MzYsMy45MjM3MDcyNCBDNC45NDk1NDM2MywzLjkxNjA3MDAxIDQuOTQxMjU1OTMsMy45MDgxMTQ1NiA0LjkzMzExNDI4LDMuOSBMNC45LDMuOSBDNC45NTY1OSwzLjk2NjkwNTMzIDQuOTkzNjQ3MzIsMy45OTkzNjM1NiA0Ljk5NDI2Nzk4LDQgTTIuMTAzODQ5NiwyIEwyLjA5MTkxMjg2LDIuMDE1OTA2NjggQzIuMDUxOTI0OCwyLjQ5ODI2MjA1IDIuMjMyMDIwMjksMy4xOTgxNTYgMi4yODE1NTc3NCwzLjM3OTQ2MjcxIEMyLjE3NzExMTMxLDMuMzA0OTM2OTYgMi4wMzQxNjg5LDMuMTE5NjUzNTkgMi4wMzI1Mjc2LDMuMTE3NTkxNjEgTDIuMDA5OTk3MDIsMy4xMTI0MzY2NyBMMiwzLjEzMjkwOTE2IEMyLjMyMzYzNDc0LDQuNDcxMjc5NiAzLjA2MDEzMTMsNS4xMjg2MDg0NiAzLjI5MDM2MTA5LDUuMzA2MzgwMzUgQzMuMTcyMTg3NDEsNS4yNzQyNzI0MiAyLjk1NjI4MTcxLDUuMjAyODM5NjQgMi44MDUyODIwMSw1LjE1MDcwMTA3IEwyLjc4NDM5MjcyLDUuMTU3MTgxNTcgTDIuNzg0MzkyNzIsNS4xNzg1Mzc3NiBDMy4yMDE3MzA4Myw1Ljc1NzIxNjkyIDQuMjYxMjY1MjksNi4yODUyMzAzNSA0LjU4MDEyNTM0LDYuNDM1MTY1NTUgQzQuMzg2NjAxMDEsNi40MTIxODkyMyA0LjA2Njg0NTcyLDYuMzQ1MTc0OTcgNC4wNjI5NjYyOCw2LjM0NDI5MTI3IEw0LjA0MjY3MzgzLDYuMzU0NjAxMTUgTDQuMDQ3ODk2MTUsNi4zNzYzOTkyIEM0LjM3MDMzNzIxLDYuNjI3MDc2NzEgNC42OTUxNjU2Miw2LjgzMjY4NTI4IDUsNyBMNSw2Ljg2OTk0ODE2IEM0Ljg4Mjg3MDc4LDYuODA2MTc0MTUgNC43NjExMTYwOCw2LjczNjUwODc4IDQuNjM1MzMyNzQsNi42NjAzNjI5MSBDNC41MzE3ODE1Niw2LjU5OTM4NzMgNC40NDc0NzgzNiw2LjU0NzY5MDU5IDQuMzg5Mjg2NzgsNi41MTE0NTg3IEM0LjM5MzE2NjIyLDYuNTEyMTk1MTIgNC4zOTcxOTQ4Nyw2LjUxMzA3ODgzIDQuNDAxMDc0MzEsNi41MTM4MTUyNSBDNC4zNDA3OTM3OSw2LjQ3NDkzMjI1IDQuMjc5OTE2NDQsNi40MzQ1NzY0MSA0LjIxODI5MzA1LDYuMzkyODk1MDIgQzQuMjE4MjkzMDUsNi4zOTI4OTUwMiA0LjY1MDcwMTI4LDYuNDY2Njg0MzQgNC43OTg4NjYwMSw2LjQ2NjY4NDM0IEM0Ljc5ODg2NjAxLDYuNDY2Njg0MzQgNC4yNjE0MTQ1LDYuMTgyNTczMzUgMy43NDU1OTgzMyw1Ljg0NDg1MDk1IEMzLjMzNDA3OTM4LDUuNTgyODMyNTcgMy4xMzI2NDY5Nyw1LjQwNjgyODA5IDMuMDQ0NjEzNTUsNS4zMTk0ODg2MyBDMy4wNDgwNDUzNiw1LjMyMDk2MTQ3IDMuMDUxNDc3MTcsNS4zMjIyODcwMyAzLjA1NDkwODk4LDUuMzIzNjEyNTggQzMuMDEzODc2NDUsNS4yODQ4NzY4NyAyLjk3NzAyMTc4LDUuMjQ3MDI0ODYgMi45NDUwOTEwMiw1LjIxMDM1MTEzIEMyLjk0NTA5MTAyLDUuMjEwMzUxMTMgMy4yMjg0MzkyNyw1LjMzMTEyNDA3IDMuNTUxNjI2MzgsNS4zNzA0NDg5MiBDMy41NTE2MjYzOCw1LjM3MDQ0ODkyIDIuNjMwNDA4ODMsNC44Njg2NTIwNiAyLjIwMjYyNjA4LDMuNTEzNjM4NTEgQzIuMTgwMDk1NDksMy40NTY5MzQxMyAyLjE2MjE5MDM5LDMuNDA5NTA4NjYgMi4xNDkyMDkxOSwzLjM3Mzg2NTkxIEMyLjE1NDU4MDcyLDMuMzc4ODczNTcgMi4xNTk5NTIyNSwzLjM4MzczMzk1IDIuMTY1MTc0NTcsMy4zODg0NDcwNCBDMi4xNTA3MDEyOCwzLjMzNzA0NDg5IDIuMTM2OTc0MDQsMy4yODQxNjk5MSAyLjEyMzg0MzYzLDMuMjMwNDExMjIgQzIuMTIzODQzNjMsMy4yMzA0MTEyMiAyLjE2NjIxOTA0LDMuMzUyMzYyNDQgMi40MDY1OTUwNSwzLjQ4MTA4ODcyIEMyLjIxODc0MDY3LDIuNzU5OTg1ODYgMi4xNzE3Mzk3OCwyLjI5Mjk0ODA0IDIuMTYwMzk5ODgsMi4xMzI0MDgzOSBDMi4xNjkzNTI0MywyLjE0MzQ1NDcgMi4xNzk2NDc4NywyLjE1NTgyNjU2IDIuMTkxNTg0NiwyLjE2OTUyMzk4IEMyLjE5MDY4OTM1LDIuMTQ1NjYzOTYgMi4xOTAwOTI1MSwyLjEyMTY1NjY1IDIuMTg5Nzk0MDksMi4wOTc5NDM5MSBDMi4xODk3OTQwOSwyLjA5Nzk0MzkxIDMuMTc1MzIwOCwzLjIzMDExNjY1IDQuNDMzMzAzNDksMy43MjU3Mjc1OCBMNC42MjI3OTkxNiwzLjcyNTcyNzU4IEM0LjM4OTczNDQxLDMuNjM0NDExNDUgMy43Njk2MjEwMSwzLjM4MTk2NjU0IDMuNDc1MDgyMDcsMy4xNzE3OTIxNSBDMi45MjAwMjM4NywyLjc3NTQ1MDY5IDIuMTMxMTU0ODgsMi4wMTE3ODI3MyAyLjEyMzI0Njc5LDIuMDA0MTIzOTUgTDIuMTAzODQ5NiwyIiBpZD0iRmlsbC0xMCIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNiw3IEw2LDcuMTY4MTU4NDUgQzYuNTQwMTQzMjcsNy43ODMwODg5NCA2Ljk3ODIzMDUzLDcuOTk2MTkxMiA2Ljk4NDE4NDU4LDcuOTk4ODU3MzYgTDYuOTg2Nzg5NDcsOCBMNi45OTM3NjY4Niw3Ljk5NTA0ODU2IEw2Ljk5ODMyNTQzLDcuOTc2OTU2NzcgTDcsNy44MzQ1MDc3MSBMNi45OTAyMzE2NSw3LjgxMDg5MzE2IEM2Ljk4MTQ4NjY1LDcuODA4MjI3IDYuOTcyNzQxNjUsNy44MDUzNzA0MSA2Ljk2MzgxMDU5LDcuODAyMzIzMzcgTDYuOTYzODEwNTksNy44MTg4OTE2NCBDNi45NjM4MTA1OSw3LjgxODg5MTY0IDYuOTA3NzEyMzUsNy43OTM5NDQwMSA2LjgwNzIzNzg4LDcuNzI4MDUxOCBDNi42Mjc1MDAyMyw3LjYyMjkyODk3IDYuNDI5NjIxMzYsNy40NDc1MzM4IDYuMjQ1NTExMjEsNy4yNjAzMzEzNyBDNi4xNjgyMDE2OSw3LjE4MzU4NDA4IDYuMDg2MDU0NTIsNy4wOTY5MzM5MiA2LDcgTTQuOTA0MDMxNTUsNCBMNC45MjkzMjU1Niw0IEw0LjkyNjQ0Mjc4LDMuOTg3NyBDNC45MzA0ODc5NywzLjk5MTEgNC45MzUzNzAwOCwzLjk5NTIgNC45NDA5NDk2NCw0IEw1LDQgQzQuOTY4NDc1NDgsMy45NzI5IDQuOTM2MzkzLDMuOTQ4NyA0LjkwMzg5MjA2LDMuOTI3OCBDNC45MDM1MjAwOSwzLjkyNzYgNC45MDMxOTQ2MSwzLjkyNzUgNC45MDI4NjkxNCwzLjkyNzUgQzQuODk4MTI2NTEsMy45Mjc1IDQuOTAwMjE4ODUsMy45NTMxIDQuOTAyMzU3NjgsMy45Nzg4IEM0LjkwMjk2MjEzLDMuOTg2IDQuOTAzNTY2NTgsMy45OTMzIDQuOTA0MDMxNTUsNCBNNS4wODY2OTQ3LDQgTDUsNCBDNS41NDgzNjU1MSw0LjI2NjA4MDk5IDUuODYzMzE0ODUsNC43NDQzMTk5IDYsNSBMNS45OTU4ODk4OSw0Ljk0MDUyMzA3IEw1Ljk5NDM2MDU0LDQuOTM1MjcyMTQgQzUuOTMxMjc1MDksNC44MTk3NTE1OSA1LjcwNTAyNzcyLDQuNDI3NTQ3MjEgNS40NDU4MDM4Niw0LjIzNDk3OTMgQzUuMzExNzk1MDcsNC4xMzU4MTc0MyA1LjE4NzQ0MDI2LDQuMDU3NzYwMjcgNS4wODY2OTQ3LDQiIGlkPSJGaWxsLTExIiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljk5NDI0NzA2LDUgQzUuMDAxMjQ3MDYsNSA1LjAwMDg0NzA2LDQuOTg2OCA0Ljk5ODM0NzA2LDQuOTY5OSBMNC45MjQxNDcwNiw0Ljk2OTkgQzQuOTQ2NDQ3MDYsNC45ODAxIDQuOTY5MTQ3MDYsNC45OTAxIDQuOTkyMjQ3MDYsNC45OTk3IEM0Ljk5Mjk0NzA2LDQuOTk5OSA0Ljk5MzY0NzA2LDUgNC45OTQyNDcwNiw1IE0yLjksNSBDMi45MzAxNzA0NSw0Ljg3NjMzODMzIDIuOTU3OTU0NTUsNC43NTMyMTE5OSAyLjk4MzI5NTQ1LDQuNjMzMjk3NjQgTDMsNCBDMi45NzMxMjUsNC4wNjcyNzMzOCAyLjk0NDE0NzczLDQuMTM2NTA5NjQgMi45MTQwOTA5MSw0LjIwNjgxNjU2IEwyLjkyMTQyMDQ1LDQuMjA4NjAxIEwyLjksNSBNMi45LDUgQzIuOTM1MjM1NzMsNC44MDE4MDE4IDIuOTY2MDA0OTYsNC42MTE5MzY5NCAyLjk5MjMwNzY5LDQuNDM5MTg5MTkgTDMsNCBDMi45NzQxOTM1NSw0LjA3OTk1NDk1IDIuOTQ2NDY0MDIsNC4xNjI4Mzc4NCAyLjkxNzA1OTU1LDQuMjQ4ODczODcgTDIuOSw1IE0xLjksMi45IEMxLjk0NzM4ODA2LDIuOTQzMDc0MTQgMS45ODA1MjIzOSwyLjk3ODExOTM1IDIsMyBDMS45NzE5NDAzLDIuOTg3NDE0MSAxLjk0MTQxNzkxLDIuOTc0MTc3MjIgMS45MDc4MzU4MiwyLjk2MDA3MjMzIEwxLjksMi45IE0yLDMgQzIuMDAwMzk5MDQsMy4wMjcwOTgyOSAyLjAwMTE5NzEzLDMuMDU0NTMzMjEgMi4wMDIzOTQyNSwzLjA4MTc5OTgyIEMyLjA4MTYwNDE1LDMuMTU5NzI4NDYgMi4yMTA4OTM4NSwzLjI3NTUyNzM4IDIuMzg2MDczNDIsMy40MTYwNjgyMiBDMi42MzgyNjgxNiw0LjAwMjYzNjg5IDMuNDg0NDM3MzUsNS4zMjM4ODkxNCA0LjYwMTM1Njc0LDYgTDQuNjAxMzU2NzQsNS44NTQ3NDY0MSBDNC41NzA0MzA5Nyw1LjgzNTU1ODggNC41Mzk3MDQ3MSw1LjgxNjAzNDU2IDQuNTA5Mzc3NDksNS43OTYxNzM3IEw0LjQwMjQzNDE2LDQuNzEyMjQxOTIgTDQuMzUzMzUxOTYsNC43MTU5NDQ3OSBMNC40NTYzMDQ4Nyw1Ljc2MDE1NDg1IEM0LjM2MTczMTg0LDUuNjk2NzAxMDggNC4yNzA3NTAyLDUuNjMwODkwOTMgNC4xODI3NjEzNyw1LjU2Mjg5MjczIEw0LjA3NzgxMzI1LDQuNTUxMTY2OTcgTDQuMDI4OTMwNTcsNC41NTQ4Njk4NCBMNC4xMjg4OTA2Niw1LjUyMDk4Mjk0IEM0LjAyOTkyODE3LDUuNDQyMjEyNzUgMy45MzUxNTU2Myw1LjM2MTQyMjggMy44NDQ5NzIwNyw1LjI3OTI4NjM2IEwzLjc0OTgwMDQ4LDQuMzUwNzA2OTEgTDMuNzAwNzE4MjgsNC4zNTQ0MDk3OCBMMy43OTA1MDI3OSw1LjIyNzk1MTA4IEMzLjY4Nzk0ODkyLDUuMTMxODQ0NyAzLjU5MDc4MjEyLDUuMDM0MzkxODMgMy41MDAxOTk1Miw0LjkzNjkzODk2IEwzLjQyMDM5MTA2LDQuMTQzNTE0MzYgQzMuNTQyMDk4OTYsNC4yMTk3NTk4NyAzLjY3MDE5MTU0LDQuMjk3MDE1MjYgMy44MDYyNjQ5Niw0LjM3NTYxNzE1IEM0LjE4MzE2MDQyLDQuNTkwMDQ3MTMgNC41NjcyMzg2Myw0Ljc1MDQ0ODgzIDQuODY4NTE1NTYsNC44NjAxODg1MSBMNSw0Ljg2MDE4ODUxIEMzLjMxNzgzNzE5LDQuMjkzODE3MzIgMiwzIDIsMyIgaWQ9IkZpbGwtMTIiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuOSw3IEM2LjkxOTA1NDQ0LDYuODkyODI3MTggNi45NDE1OTUwMyw2Ljc4MDQxMTA3IDYuOTY3NDc4NTEsNi42NjQ4NDg5OSBMNyw1IEM2Ljk2NjY2NjY3LDUuMjEzMDg3MjUgNi45NDMxMjMyMSw1LjM5MzI0NjY0IDYuOTMxOTAwNjcsNS40ODQwNjA0IEw2LjkyOTY1NjE2LDUuNDg4MDQ1MyBMNi45LDcgTTUuOSw3IEM1LjkxOTk0NDIxLDYuOTE0MDI2MjQgNS45NDE0NjkwOCw2LjgyNzI0NTIxIDUuOTY0NTc0NjIsNi43Mzk0NTUxIEw2LDUgQzUuOTc0NDc2OTksNS4xMjcxNDQzIDUuOTUxNzg5ODcsNS4yNTI0NzIyNSA1LjkzMjIxNzU3LDUuMzcyMTQ5MzQgTDUuOSw3IE00Ljg5NDkzMjk0LDQgTDQuNzU2NzA2NDEsNCBDNC43NTg1NjkzLDQuMDEwNzM0MzEgNC43NjA5OTEwNiw0LjAyMjQyOTkxIDQuNzYzNDEyODIsNC4wMzM5NjUyOSBDNC43NzE5ODIxMiw0LjA3NTE0MDE5IDQuNzgwMzY1MTMsNC4xMTYxNTQ4NyA0Ljc2MTM2MzY0LDQuMTE2MTU0ODcgQzQuNzYwMDU5NjEsNC4xMTYxNTQ4NyA0Ljc1ODc1NTU5LDQuMTE1OTk0NjYgNC43NTcyNjUyOCw0LjExNTY3NDIzIEM0LjYyNzA0OTE4LDQuMDgyMTg5NTkgNC40OTg1MDk2OSw0LjA0MzQxNzg5IDQuMzcyMjA1NjYsNCBMNC4yNDk0NDExMyw0IEM0LjU2Mzg5NzE3LDQuMTE2Nzk1NzMgNC43ODIwNDE3Myw0LjE3MzUxMTM1IDQuNzg2MTQwMDksNC4xNzQ2MzI4NCBMNC44MDczNzcwNSw0LjE3MDQ2NzI5IEw0LjgxNTM4NzQ4LDQuMTUyODQzNzkgTDQuNzg5MTIwNzIsNC4wMDQ0ODU5OCBDNC44NjMyNjM3OSw0LjAyNDk5MzMyIDUuMDk2ODcwMzQsNC4xMTQzOTI1MiA1LjcwMDgxOTY3LDQuNDkzNzc4MzcgQzUuODkxOTUyMzEsNC42MTQ0MTkyMyA2LjA2MTI4OTEyLDQuNzU4NzcxNyA2LjIwOTc2MTU1LDQuOTA0ODg2NTIgTDYuMTY4MjE5MDgsNC45MDc5MzA1NyBMNi4zMDYyNTkzMSw2LjI1Mjc2MzY4IEM2LjIyMjA1NjYzLDYuMTkwNjAwOCA2LjEzMjYzNzg1LDYuMTI4Mjc3NyA2LjA0MDYxMTAzLDYuMDY1OTU0NjEgTDUuOTAwMTQ5MDMsNC42NDEzMzUxMSBMNS44NTM5NDkzMyw0LjY0NDM3OTE3IEw1Ljk5MTA1ODEyLDYuMDMyNDY5OTYgQzUuOTA4OTA0NjIsNS45Nzc2NzY5IDUuODIzMzk3OTEsNS45MjM1MjQ3IDUuNzM2NDAwODksNS44Njk4NTMxNCBMNS41OTY0OTc3Niw0LjQ1MDIwMDI3IEw1LjU1MDQ4NDM1LDQuNDUzNzI0OTcgTDUuNjg3MDM0MjgsNS44MzkyNTIzNCBDNS42MDQ1MDgyLDUuNzg4OTQ1MjYgNS41MTk3NDY2NSw1LjczOTI3OTA0IDUuNDMzMzA4NDksNS42ODk5MzMyNCBMNS4yOTM0MDUzNyw0LjI4ODIyNDMgTDUuMjQ3NTc4MjQsNC4yOTE1ODg3OSBMNS4zODQzMTQ0Niw1LjY2MjIxNjI5IEM1LjMwMDI5ODA2LDUuNjE1NDMzOTEgNS4yMTUzNTAyMiw1LjU2ODY1MTU0IDUuMTI4OTEyMDcsNS41MjMxNTA4NyBMNC45OTIzNjIxNSw0LjE1NDQ0NTkzIEw0Ljk0NjUzNTAyLDQuMTU3ODEwNDEgTDUuMDgwMjkwNjEsNS40OTc4MzcxMiBDNC45OTQ5NzAxOSw1LjQ1NDA5ODggNC45MDg5MDQ2Miw1LjQxMDY4MDkxIDQuODIyMjgwMTgsNS4zNjkwMjUzNyBMNC43MDk3NjE1NSw0LjIzNTk5NDY2IEw0LjY2MzkzNDQzLDQuMjM5NTE5MzYgTDQuNzczODQ1MDEsNS4zNDU0NzM5NyBDNC42OTY1MzUwMiw1LjMwODYyNDgzIDQuNjE5MDM4NzUsNS4yNzI1NzY3NyA0LjU0MTM1NjE4LDUuMjM3OTcwNjMgTDQuNTIxOTgyMTIsNS4yMjg5OTg2NiBMNC40MTY5MTUwNSw0LjE0MDE4NjkyIEw0LjM3MDkwMTY0LDQuMTQzMzkxMTkgTDQuNDczMzYwNjYsNS4yMDU5Mjc5IEM0LjM4NzEwODc5LDUuMTY1NzE0MjkgNC4zMDI5MDYxMSw1LjEyMzQxNzg5IDQuMjIwOTM4OSw1LjA3ODM5Nzg2IEw0LjExNzM2MjE1LDQuMDA0NDg1OTggTDQuMDcxNzIxMzEsNC4wMDc1MzAwNCBMNC4xNzIxMzExNSw1LjA0OTcxOTYzIEM0LjExMzYzNjM2LDUuMDE2Mzk1MTkgNC4wNTYwNzMwMyw0Ljk4MjEwOTQ4IDQsNC45NDY3MDIyNyBMNCw1LjA4NDk2NjYyIEM0LjEwNjE4NDgsNS4xNTA0OTM5OSA0LjIxNDc5MTM2LDUuMjA5NjEyODIgNC4zMjYwMDU5Niw1LjI2MTA0MTM5IEM2LjM2MTk1OTc2LDYuMjAzODk4NTMgNi45MDI1NzA3OSw2LjkxMjY4MzU4IDYuOTU3NTI2MDgsNi45OTAzODcxOCBMNi45NzcyNzI3Myw3IEw2Ljk4NDE2NTQyLDYuOTk5MDM4NzIgTDcsNi45Nzg2OTE1OSBMNi45OTIxNzU4Niw2Ljg3NDM5MjUyIEw2Ljk4Nzg5MTIxLDYuODYzOTc4NjQgTDYuOTgwODEyMjIsNi44NTYxMjgxNyBMNi44NTcxMTYyNCw1LjYxOTU5OTQ3IEw2Ljg0NjY4NDA1LDUuNjIwNDAwNTMgTDYuODQzODg5NzIsNS41ODY1OTU0NiBDNi41Nzc0OTYyNyw1LjE4MDkzNDU4IDUuOTYzNjczNjIsNC40MjIxNjI4OCA0Ljg5NDkzMjk0LDQiIGlkPSJGaWxsLTEzIiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDggQzQuOTY1NTA3MzYsNy45NjM2NjgzMSA0LjkzMjExOTQ4LDcuOTMwNDI4NjcgNC45LDcuOSBMNC45LDcuOTAxMzM1MjEgQzQuOTM3MzU2NzksNy45MzY3NTMzNCA0Ljk3MTM1ODQzLDcuOTcwNjI1NDQgNSw4IE00LDcgQzQuNDQ1NDMyMjksNy40ODA2MTIwMyA0LjkwOTU0Nzc0LDcuODg0OTI5NzggNC45MDk1NDc3NCw3Ljg4NDkyOTc4IEM0Ljc4MTYwMDMxLDcuODg0OTI5NzggNC40MDgxOTQ4Miw3Ljc3OTkyMDM1IDQuNDA4MTk0ODIsNy43Nzk5MjAzNSBDNC40NjE0MDk2MSw3LjgzOTIzNzA2IDQuNTEzOTgwMTYsNy44OTY2NjczNyA0LjU2NjAzNTMsNy45NTIwMDE2OCBDNC42NjI0MTQ2NCw3Ljk4Mzg2MDgzIDQuNzUwNTQ3NjEsOCA0LjgyODg4ODAzLDggQzQuOTM4MTUyMyw4IDQuOTg4MDE3MDEsNy45Njc5MzEyNSA0Ljk4OTk0OTc1LDcuOTY2NDY0MDUgTDUsNy45NDM2MTc2OSBMNC45OTE0OTU5NCw3LjkxOTUxMzczIEM0LjU2MTY1NDQzLDcuNTU4MzczNTEgNC4yMzk2NTk4NCw3LjI1MTMxIDQsNyBNMiw0IEMyLjMwMDE3Nzk5LDUuNDEyNzc2NDEgMi45NDY2MDI0NSw1LjkzNTk2NDM3IDIuOTQ2NjAyNDUsNS45MzU5NjQzNyBDMi43MTk4MTk5MSw1Ljg5NDk2MzE0IDIuNTIwOTkyNTcsNS43NjkwNDE3NyAyLjUyMDk5MjU3LDUuNzY5MDQxNzcgQzIuNTQzMzk4Niw1LjgwNzI3ODg3IDIuNTY5MjU5NzYsNS44NDY3NDQ0NyAyLjU5ODA1MjU2LDUuODg3MTMxNDUgQzIuNzg0MTA2MzgsNS45OTcyMzU4NyAyLjk3ODExNzQ3LDYgMi45ODczMzExNyw2IEwzLDUuOTg1NTY1MTEgTDIuOTkzMTk0NDMsNS45NjQyMTk5IEMyLjQ3MDk0NTQ1LDUuNTgxMzg4MjEgMi4xMjc2MzA2MSw0LjQ3NjE5Nzc5IDIsNCBNMiw0IEMxLjk5NTUxOTM1LDMuOTgyNzI1OTggMS45OTA4MzUwMywzLjk2NTczNTkyIDEuOTg1ODk2MTMsMy45NDkyMTkxMiBDMS45NDAwMjAzNywzLjkxMDQ1OTA2IDEuOTA5NTcyMywzLjkwMDQ3MzI2IDEuOTA4MDk1NzIsMy45IEwxLjkwMTg4MzkxLDMuOTAxMjMwNDggTDEuOSwzLjkwNzAwNDI2IEMxLjkwMTE3MTA4LDMuOTExMTY4OTUgMS45MDIzNDIxNiwzLjkxNTMzMzY1IDEuOTAzNTEzMjQsMy45MTk0NTEwMiBDMS45ODU1Mzk3MSwzLjk2MDgxNDAxIDIsNCAyLDQiIGlkPSJGaWxsLTE0IiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDkgQzYuOTM1ODI4ODgsOC45NjU0IDYuOSw4Ljk1MjMgNi45LDguOTUyMyBMNi45LDguOTYxIEM2LjkzMTkwNzMxLDguOTcwMSA2Ljk2NTQxODg5LDguOTgzNCA3LDkgTTUsOCBMNSw3Ljk5ODYyOTE1IEM1LjM1MDUxMTU2LDcuOTYxOTA0NzYgNS42ODUxMDgsNy45MjkwNzY0OCA2LDcuOSBDNS42NDk4NjczNyw3LjkzMzExNjg4IDUuMzEyMjM5NDgsNy45NjcxNzE3MiA1LDgiIGlkPSJGaWxsLTE1IiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="Journaliste Figaro" />
        Charles Sapin
</a>                                    </li>
    
            <li class="fig-content-metas__maj-date">Mis à jour
            <time datetime="2018-03-01T14:40:44+01:00">le 01/03/2018 à 14:40</time>
        </li>
    
            <li class="fig-content-metas__pub-date">Publié
            <time datetime="2018-03-01T12:42:59+01:00">le 01/03/2018 à 12:42</time>
        </li>
    </ul>
                    <figure class="fig-media fig-media--type-vid fig-media--main" data-media-type="VID" data-media-id="20180301VIDFIG00196">
        <div class="fig-embed fig-embed-vid">
        <video
            data-fig-player
            data-account="610043537001"
            data-player="41qR7Z79e"
            data-embed="default"
            data-video-id="5743031809001"
            data-application-id
            class="video-js"
            controls
            style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;"
             autoplay             >
        </video>
        <script src="//players.brightcove.net/610043537001/41qR7Z79e_default/index.min.js"></script>
    </div>
</figure>
        
                    <div class="fig-micronav__wrapper" data-component="micronav" aria-live="polite"></div>        
                    <p class="fig-content__chapo" data-fgtcs-crosslinks="Contextuel" data-fgtcs-articlelength>LE SCAN POLITIQUE - «Je suis inquiétée pour combattre le terrorisme. C'est le monde à l'envers», a réagi la présidente du Front national auprès du <i>Figaro. </i>Elle risque trois ans de prison et 75.000 euros d'amende.</p>
        
        <div class="fig-content__body" data-component="fig-content-body" data-fgtcs-crosslinks="Contextuel" data-fgtcs-articlelength>
            <p>La présidente du Front national a été mise en examen ce matin par les juges d'instruction de Nanterre, pour «diffusion d'images violentes», après avoir <a href="http://www.lefigaro.fr/politique/le-scan/2015/12/16/25001-20151216ARTFIG00116-remontee-contre-bourdin-le-pen-publie-des-photos-d-executions-de-daech.php" target="_self">diffusé en 2015 sur Twitter des photos d'exécutions d'otages par le groupe État islamique</a>, notamment de l'américain James Foley. </p> <p>Dans ses messages, Marine Le Pen s'adressait au journaliste Jean-Jacques Bourdin et à son média RMC/BFMTV, qu'elle accusait d'avoir fait un «parallèle» entre son parti et le groupe terroriste. <a href="http://www.lefigaro.fr/politique/le-scan/2017/11/08/25001-20171108ARTFIG00203-images-de-daech-sur-twitter-l-assemblee-leve-l-immunite-de-marine-le-pen.php" target="_self">Des tweets qui ont alors soulevé une vaste polémique</a> et qui ont été qualifiés de «faute politique et morale», de la part du premier ministre de l'époque, Manuel Valls.</p> <p><b>» LIRE AUSSI - <a href="http://www.lefigaro.fr/secteur/high-tech/2015/12/17/32001-20151217ARTFIG00132-marine-le-pen-a-t-elle-le-droit-de-diffuser-des-images-de-decapitation-sur-twitter.php" target="_self">Marine Le Pen a-t-elle le droit de diffuser des images de décapitation sur Twitter?</a> </b> </p> <p>«J'ai désormais ma médaille de la résistance contre Daech. Je suis donc inquiétée pour combattre le terrorisme. C'est le monde à l'envers, a réagi Marine Le Pen au <i>Figaro. </i>Pour me mettre en examen ils ont dû aller chercher un texte qui à l'origine est fait pour protéger les enfants du minitel rose.»</p> <div class="fig-embed"><blockquote class="twitter-tweet" data-lang="en"> <a href="https://twitter.com/arthurberdah/status/677062454703165440?ref_src=twsrc%5Etfw"> </a> </blockquote><script async="async" src="https://platform.twitter.com/widgets.js" charset="utf-8"> </script> </div>  <p>Le bureau de l'Assemblée nationale avait décidé de lever l'immunité de la présidente du Front national au mois de novembre. Elle risque jusqu'à trois ans de prison et 75.000 euros d'amende. Le député apparenté FN du Gard, Gilbert Collard, a quant lui été mis en examen pour des faits similaires le 11 janvier dernier. </p>        </div>

                    <div class=" "
    data-figtag="inarticle"
     data-fidji-id="" data-fidji-source="">
</div>        
        
                
    </article>

    </div>
        <div class="fig-page__col-right">
        

    <div data-component="main-pub-content">
        <div class="fig-pub fig-pub--wrapped fig-pub--hidden">
                            <div class=" "
    data-figtag="pave_atf"
     data-fidji-id="" data-fidji-source="">
</div>                    </div>

        <div class="fig-pub fig-pub--gps fig-pub--wrapped fig-pub--hidden">
                            <div class=" "
    data-figtag="bloc-haut"
     data-fidji-id="" data-fidji-source="">
</div>            
                                            </div>
    </div>

        <div class="fig-pub fig-pub--wrapped fig-pub--gps fig-pub--bottom fig-pub--hidden" data-sticky-limit>
        
    </div>
</div>    </div>

    <div class="fig-page__col-full fig-page__col-full--padded" data-sticky-limit>

        

                                <div class="fig-authors fig-authors--single" data-fgtcs-inview='{"customCategorie":"navigation","customAction":"scrollUse","customLabel":true,"event":"customEventSPE"}' data-fgtcs-crosslinks="Structurel">
                                
<div class="fig-author">
            <input class="fig-author__toggle-info" type="checkbox" id="fig-author__toggle-info">
        <label for="fig-author__toggle-info">
            <span class="fig-author__toggle-btn"></span>
        </label>
        <div class="fig-author__infos">
                    <a href="http://plus.lefigaro.fr/page/csapin-0">
                                    <img class="fig-author__img" src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-3275690-5ttlc37.png" alt="Charles Sapin" />
                        <div class="fig-author__name">Charles Sapin</div>
                    </a>
        
                    <div class="fig-author__infos-container">
                <div>
                                            <img class="fig-author__infos-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy44LjEgKDI5Njg3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT45QkEzMjREQi0yN0EyLTQ4QTctQTAxNi1BQUM4RDQ2OTMyNUE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGljbGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUlRJQ0xFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjAwMDAwMCwgLTQ5MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImF1dGV1ciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMwLjAwMDAwMCwgNDg4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb24tbWluaS1maWdhcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJmcGx1bWUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQsMTEuODk5NiBDMTQsMTMuMDU5NTcyNSAxMy4wNTkyOTY4LDE0IDExLjg5OTU3NiwxNCBMMi4wOTk5NDQwMSwxNCBDMC45NDA1NDMyNTgsMTQgMCwxMy4wNTk1NzI1IDAsMTEuODk5NiBMMCwwIEwxMS44OTk1NzYsMCBDMTMuMDU5Mjk2OCwwIDE0LDAuOTQwMjY3NDU5IDE0LDIuMTAwMjQwMDMgTDE0LDExLjg5OTYiIGlkPSJGaWxsLTEiIGZpbGw9IiMzNzc1Q0EiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguOTgyMzUyOTQsOSBMOC45NjY5ODI5Miw4Ljk5MTkyOTU3IEM4Ljk2Mzc1NzEyLDguOTg4MjYxMTkgOC42NTQwNzk3LDguNjMzNDA2NyA4LjAwOTEwODE2LDguMDU5MTgzMTcgTDgsOC4wMjU2Nzg2NSBMOC4wMjE0NDIxMyw4LjAwNDQwMjA1IEw4LjEyMTI1MjM3LDggTDguMTM1Mjk0MTIsOC4wMDUzODAyOSBDOC40ODIzNTI5NCw4LjMxNTQ4MDU2IDguNjQ1MTYxMjksOC41MTUwNDAzNSA4Ljg3MDAxODk4LDguNzkxMzkxNTQgQzguOTEwODE1OTQsOC44NDAzMDMyNSA4Ljk1Mjk0MTE4LDguODkyMTQ5NjcgOC45OTg2NzE3Myw4Ljk0NzQxOTkxIEw5LDguOTg5NzI4NTQgTDguOTgyMzUyOTQsOSBNOC42MjU5MDk3NSw4IEw4LDggTDgsOC4yOTY5ODczNCBDOC40MDEwMTg5Miw4LjQ3MzY0NjY4IDguNTk1MDUwOTUsOC42MTg1NzUwOCA4LjU5Njc5NzY3LDguNjIwMDAxMTkgQzguNjAyMzI4OTcsOC42MjM3NDQ3MyA5LjI0OTQ5MDU0LDkuMDQyNDg2MTggOS43ODAyMDM3OCw5LjYzODA2NTI0IEM5Ljk3MDE2MDEyLDkuODUwNzMzODUgMTAuMTA1Mzg1Nyw5Ljk4MzM2MjA1IDEwLjIyNDc0NTMsMTAuMTAwNDgxMyBDMTAuNDMzNDc4OSwxMC4zMDUxMjgxIDEwLjYxNDg0NzIsMTAuNDgyNjc4NyAxMSwxMSBDMTAuNjgxMjIyNywxMC40Nzc1MDkxIDEwLjIzNTUxNjcsOS45MTEzNDM1MSA5LjU2ODcwNDUxLDkuMTc1NDcwOTEgQzkuMjYyMDA4NzMsOC44MzY1OTE2IDguOTE5Nzk2MjIsOC40MTAzNjMwNiA4LjYyNTkwOTc1LDgiIGlkPSJGaWxsLTIiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjY4NDMzMjgsOS41NTUxODA0MSBDMTAuMTE2MTQ5LDkuMDgzMzUwMTMgOS40MDQxMTI1NCw4LjQ4MTA1MjIxIDguOTM1NTU4ODEsOC4wMDY1MDA3MSBMOC45MTkzODM5OCw4IEw4Ljc3ODI4NDQ0LDggTDguNzU5MTg0MzgsOC4wMTEwMzYwOCBMOC43NjI0NTM3Niw4LjAzMDk5MTc0IEM5LjExNjQwNzEyLDguMzg3Nzc0NjQgOS41MzMxNjcsOC43NjEzMzg0NCA5LjkwNTcwNDIxLDkuMDU2NTkxNDEgQzEwLjY5Mzk2ODksOS42ODA2NTkxNCAxMS4yMjA4NTUyLDEwLjE2MDgwNDMgMTEuNTk3Njk0MiwxMC42MDM5MTA1IEMxMS4xNDIzOTAxLDEwLjE2NTE4ODUgMTAuOTI3OTg3NiwxMC4wMTQ2MTQgMTAuNjgxMjM1NSw5Ljg0MTA2MDI3IEMxMC41NDAxMzU5LDkuNzQxNzM1NTQgMTAuMzgwMjgwNSw5LjYyOTI1ODIxIDEwLjE1NTcyNTcsOS40NDg5MDE0MyBDOS41MjgzNDg5Niw4Ljk0MzgxMTczIDguNzYzMzE0MTIsOC41ODg2OTE4IDguNzU2Nzc1MzYsOC41ODU1MTcwMyBDOC43NTQ1Mzg0Miw4LjU4NDMwNzYgOC41MTc5Mzg1Nyw4LjQ1NzQ2ODI1IDguMDI4MzkxOTgsOC4zMDQzMjM3MyBMOC4wMDg3NzU3LDguMzA2ODkzNzcgTDgsOC4zMjIxNjI4NyBMOCw4LjUyMTI2NTg3IEw4LjAxMzc2NTgxLDguNTM4OTUzODQgQzguNjYyOTk1NzgsOC43NDQ4NTk5MSA4Ljk2MjQwMjEzLDguODkzNzcxNDIgOC45NjUzMjczNyw4Ljg5NTI4MzIxIEM4Ljk3NDc5MTM2LDguODk5ODE4NTggOS45MzY1MDUyMSw5LjM3OTk2MzcyIDEwLjYzNzM1Nyw5Ljk3MTY3OTEgQzExLjIyODQyNjQsMTAuNDcxNjI4NyAxMS4zNzM0ODM2LDEwLjYwOTIwMTggMTEuNTMxMjc0MiwxMC43NjQzMTE2IEMxMS41NDMxNDcyLDEwLjc3MTU2ODIgMTEuODI5MTMxOSwxMC45NDY3ODQ5IDExLjk3MjI5NjMsMTAuOTk4NjM5NCBMMTEuOTgwMzgzNywxMSBMMTEuOTk1MzU0LDEwLjk5NDcwODcgTDEyLDEwLjk3NDI5OTUgQzExLjk5NzU5MSwxMC45NjkzMTA2IDExLjczOTEzNzksMTAuNDI5OTAzMiAxMC42ODQzMzI4LDkuNTU1MTgwNDEiIGlkPSJGaWxsLTMiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMTIxMjUyMzcsOCBMOC4wMjE0NDIxMyw4LjAwNDQwMjA1IEw4LDguMDI1Njc4NjUgTDguMDA5MTA4MTYsOC4wNTkxODMxNyBDOC42NTQwNzk3LDguNjMzNDA2NyA4Ljk2Mzc1NzEyLDguOTg4MjYxMTkgOC45NjY5ODI5Miw4Ljk5MTkyOTU3IEw4Ljk4MjM1Mjk0LDkgTDksOC45ODk3Mjg1NCBMOC45OTg2NzE3Myw4Ljk0NzQxOTkxIEM4Ljk1Mjk0MTE4LDguODkyMTQ5NjcgOC45MTA4MTU5NCw4Ljg0MDMwMzI1IDguODcwMDE4OTgsOC43OTEzOTE1NCBDOC42NDUxNjEyOSw4LjUxNTA0MDM1IDguNDgyMzUyOTQsOC4zMTU0ODA1NiA4LjEzNTI5NDEyLDguMDA1MzgwMjkgTDguMTIxMjUyMzcsOCIgaWQ9IkZpbGwtNCIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCw0IEwxMiw0IEwxMiw2LjI0OTAyOTQyIEwxMC4wNDMzNTMxLDYuMjQ5MDI5NDIgTDEwLjA0MzM1MzEsNS44NjY4MzQyMyBDMTAuMDQzMzUzMSw1LjY2MzI0ODEzIDkuOTA4NzIxNDIsNS40OTA2MDgzOCA5LjYwODQ2NzQsNS40OTA2MDgzOCBMNy44MzY1NzkxNyw1LjQ5MDYwODM4IEw3LjgzNjU3OTE3LDYuNzUzMTI0OTMgTDkuNDc3MDUzMzQsNi43NTMxMjQ5MyBMOS40NzcwNTMzNCw4LjExMDUyMjY1IEw3LjgzNjU3OTE3LDguMTEwNTIyNjUgTDcuODM2NTc5MTcsOS4xMjI0ODM3OSBDNy44MzY1NzkxNyw5LjQwMTAwMDg4IDcuOTY2Mjk5NzUsOS41MTU2NzUxNCA4LjM1ODAwMTY5LDkuNTE1Njc1MTQgTDguOTc5MzM5NTQsOS41MTU2NzUxNCBMOC45NzkzMzk1NCwxMSBMNCwxMSBMNCw5LjUxNTY3NTE0IEw0LjY1ODQyNTA2LDkuNTE1Njc1MTQgQzQuODQ4NDMzNTMsOS41MTU2NzUxNCA0Ljk4MTU0MTA3LDkuMzk2NDQ1MzIgNC45ODE1NDEwNyw5LjIyMDE5MjU1IEw0Ljk4MTU0MTA3LDUuODU2NzgwNTkgQzQuOTgxNTQxMDcsNS42NDUzNDAxIDQuOTQzNjA3MTEsNS40OTA2MDgzOCA0LjYyOTgwNTI1LDUuNDkwNjA4MzggTDQsNS40OTA2MDgzOCBMNCw0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjAyNzk0ODg0LDMgQzIuMDUxNzkyMiwzLjY2OTg1NDIxIDIuMjYyNzUwNjcsNC4zOTk3NDkxOCAyLjI2Mjc1MDY3LDQuMzk5NzQ5MTggQzIuMjYwMjI0MjIsNC4zOTg0OTUwNiAyLjI1Nzg1NTY4LDQuMzk3MjQwOTUgMi4yNTU0ODcxMyw0LjM5NTk4NjgzIEMyLjI1OTExODksNC40MDk2MjUzMyAyLjI2Mjc1MDY3LDQuNDIzNDIwNiAyLjI2NjM4MjQ0LDQuNDM3MjE1ODYgTDIuMjYwNTQwMDMsNC40NTYzNDExMiBMMi4yNDEyNzU4Niw0LjQ2MDQxNjk5IEMyLjIzNjY5NjY3LDQuNDU4ODQ5MzUgMi4xNDIyNzA2NSw0LjQyNTc3MjA2IDIsNC4yOTczODIwMyBDMi4wMTI3OTAxNSw0LjM0MjY4Njk0IDIuMDI1ODk2MSw0LjM4NzA1MTI2IDIuMDM5NjMzNjYsNC40MzA2MzE3NiBDMi4yMzIxMTc0OCw0LjkxNjc1ODExIDIuNzQ5ODgxNTcsNi4wNDQ5OTEzOCAzLjUzNzUwMTk3LDYuNDM1ODA0OTkgTDMuNTQ3NzY1NjcsNi40NTc1OTUyMyBMMy41Mjg2NTk0LDYuNDcyMzMxMDkgQzMuNTE0NzYzOTMsNi40NzIzMzEwOSAzLjIyMjE2OTU5LDYuNDY5NTA5MzMgMi45NDE1NzU4Nyw2LjM1NzEwOTI2IEMzLjEyOTE2NDY5LDYuNTM1ODIwNjYgMy4zOTgwNzM1OCw2LjczMDk5MjMyIDMuNjcyNTA5MDgsNi45MTE4OTg0MiBDMy45NjYyMDg3NSw3LjA5OTg1ODkxIDQuMzYwODA4NDYsNy4zMjk1MTg3MyA0Ljg4NzU3MzAzLDcuNTk5NjIzNzcgTDQuODk3OTk0NjMsNy42MTc2NTE2NyBMNC44ODU2NzgxOSw3LjYzNDczODk5IEM0Ljg4MzMwOTY1LDcuNjM1ODM2MzQgNC44MjIyMDExNyw3LjY1OTgyMTI5IDQuNjg4Mjk5MzgsNy42NTk4MjEyOSBDNC41OTIyOTQzMyw3LjY1OTgyMTI5IDQuNDg0Mjg4NjUsNy42NDc3NTA0MyA0LjM2NjE3NzE3LDcuNjIzOTIyMjQgQzQuNDUwMTgxNTksNy42Nzg0NzYyNSA0LjUzMjkyMjc5LDcuNzMwNTIyMDMgNC42MTQwODQ5NSw3Ljc3OTkwMjgxIEM0LjcyNDYxNzA5LDcuODQ1NDMwMzIgNC44NTU4MzQ1Miw3LjkyMDk5MDc1IDUsOCBMNSw2LjUwOTMyNzQ4IEM1LDYuMjk4MzIyNjIgNC45NjQ2Mjk3Miw2LjE0MzkwOTcgNC42NzIwMzUzNyw2LjE0MzkwOTcgTDQuMDg0NzkzOTQsNi4xNDM5MDk3IEw0LjA4NDc5Mzk0LDUuNzE3OTgwODcgQzMuMjAwODUyNjgsNS4wODgyNTgzNSAyLjUzMTE4NTg1LDMuODU3NjU3OTQgMi4zMzE1OTY0LDMuMzExMzM0MDYgQzIuMTkyOTU3NTIsMy4xODA0MzU4IDIuMDkwNjM2MzUsMy4wNzI1ODE5MSAyLjAyNzk0ODg0LDMiIGlkPSJGaWxsLTYiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQsNSBMNCw1LjQzMzgxNzY2IEw0LjY5MDU3OTM1LDUuNDMzODE3NjYgQzUuMDM0NjYyMDUsNS40MzM4MTc2NiA1LjA3NjI1NjUsNS41OTEwOTA1MyA1LjA3NjI1NjUsNS44MDYwMDM1MSBMNS4wNzYyNTY1LDcuMzI0Mjg1NDkgQzUuMjI5MjY0NjcsNy4zOTY5MzQzOCA1LjM5NDcxNDA0LDcuNDcyMjk3NjIgNS41NjYyOTExNiw3LjU0NTU4NTE4IEM2LjA0Nzk2OTc5LDcuNzQ2NjA3MDYgNi40MzY4MDM2Niw3Ljg2ODkxMjY2IDYuNjg3NDg0NTMsNy45Mzc3Mjk1MiBDNi43OTU1NTU4Myw3Ljk2NDIzNDM5IDYuOTAwMjg0NzIsNy45ODU0NzAyMiA3LDggTDYuOTk0NDI5MzEsNS43NzE5OTQyNSBDNi45OTQ0MjkzMSw1Ljc3MTk5NDI1IDYuOTQzNTUwMzgsNS42NjU0OTU3NyA2LjgzNDczNjMyLDUuNDk5OTIwMTcgTDYuODM3NTIxNjYsNS41MzM2MTAwOSBMNi44NDc5MjAyOCw1LjUzMjgxMTc1IEw2Ljk3MTIxODEyLDYuNzY1MTI4NTMgTDYuOTc4Mjc0MzMsNi43NzI5NTIyNiBMNi45ODI1NDUxOCw2Ljc4MzMzMDY3IEw2Ljk5MDM0NDE0LDYuODg3Mjc0NDcgTDYuOTc0NTYwNTMsNi45MDc1NTIyOSBMNi45Njc2OTAwMiw2LjkwODUxMDMgTDYuOTQ4MDA2OTMsNi44OTg5MzAyMyBDNi44OTMyMjg1Miw2LjgyMTQ5MTMgNi4zNTQzNTc1MSw2LjExNTEyMDU1IDQuMzI0OTU2NjcsNS4xNzU0NzUwMSBDNC4yMTQxMDAwMiw1LjEyNDIyMTYyIDQuMTA1ODQzMDMsNS4wNjUzMDQxNyA0LDUiIGlkPSJGaWxsLTciIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQsNCBMNC4wNTUxMTE2LDQuNDYzNjU2OTMgQzQuMTE3NjYzMjcsNC41MjA2MDU4OCA0LjE4NDc2MTY0LDQuNTc3NTU0ODMgNC4yNTU1ODAwNSw0LjYzMzcxNjkzIEw0LjE5MzU3OTUsNC4xMjMyNDE4NiBMNC4yMjc0NzMxMyw0LjEyMTA3OCBMNC4yOTMxOTM3Miw0LjY2MzcxNTk0IEM0LjM1NTQ2OTgzLDQuNzExNzE0MzcgNC40MjA5MTQ4NSw0Ljc1ODkyNTk0IDQuNDg5MjUzMjQsNC44MDQ5NTcyMSBMNC40MjAyMjU5Niw0LjI0MDM4NTU2IEw0LjQ1Mzk4MTgxLDQuMjM4MjIxNyBMNC41MjY0NTM1Nyw0LjgyOTQ0ODIxIEM0LjU4NzIxNDExLDQuODY5MTg0NjIgNC42NTAwNDEzMyw0LjkwNzY0MjM3IDQuNzE1MzQ4NTgsNC45NDQ3MjMxMiBMNC42NDQyNTQ2Miw0LjMzNDUxMzYyIEw0LjY3ODE0ODI1LDQuMzMyMzQ5NzYgTDQuNzUxOTk3OCw0Ljk2NTc3MTYxIEM0Ljc3Mjk0MDIsNC45NzczNzc3OSA0Ljc5NDE1ODE3LDQuOTg4Nzg3MjUgNC44MTU1MTM5Miw1IEw0LjgxNTUxMzkyLDQuNDE4ODA1OTQgTDUsNC40MTg4MDU5NCBDNC43OTE5NTM3MSw0LjM1NDY3NjkgNC41MjY3MjkxMyw0LjI2MDk0MjI2IDQuMjY2NDY0NTksNC4xMzU2MzQ5IEM0LjE3MjQ5OTMxLDQuMDg5NzAxOTggNC4wODQwNDUxOSw0LjA0NDU1NTkyIDQsNCBNNCwzIEwzLjk4MzI5NTQ1LDMuNjMzMjk3NjQgQzMuOTU3OTU0NTUsMy43NTMyMTE5OSAzLjkzMDE3MDQ1LDMuODc2MzM4MzMgMy45LDQgTDMuOTIxNDIwNDUsMy4yMDg2MDEgTDMuOTE0MDkwOTEsMy4yMDY4MTY1NiBDMy45NDQxNDc3MywzLjEzNjUwOTY0IDMuOTczMTI1LDMuMDY3MjczMzggNCwzIE0zLDMgTDIuOTkyMzA3NjksMy40MzkxODkxOSBDMi45NjYwMDQ5NiwzLjYxMTkzNjk0IDIuOTM1MjM1NzMsMy44MDE4MDE4IDIuOSw0IEwyLjkxNzA1OTU1LDMuMjQ4ODczODcgQzIuOTQ2NDY0MDIsMy4xNjI4Mzc4NCAyLjk3NDE5MzU1LDMuMDc5OTU0OTUgMywzIE0zLDMgQzIuOTgwNTIyMzksMi45NzgxMTkzNSAyLjk0NzM4ODA2LDIuOTQzMDc0MTQgMi45LDIuOSBMMi45MDc4MzU4MiwyLjk2MDA3MjMzIEMyLjk0MTQxNzkxLDIuOTc0MTc3MjIgMi45NzE5NDAzLDIuOTg3NDE0MSAzLDMiIGlkPSJGaWxsLTgiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsNSBMNi45Njc0Nzg1MSw2LjY2NDg0ODk5IEM2Ljk0MTU5NTAzLDYuNzgwNDExMDcgNi45MTkwNTQ0NCw2Ljg5MjgyNzE4IDYuOSw3IEw2LjkyOTY1NjE2LDUuNDg4MDQ1MyBMNi45MzE5MDA2Nyw1LjQ4NDA2MDQgQzYuOTQzMTIzMjEsNS4zOTMyNDY2NCA2Ljk2NjY2NjY3LDUuMjEzMDg3MjUgNyw1IE02LDUgTDUuOTY0NTc0NjIsNi43Mzk0NTUxIEM1Ljk0MTQ2OTA4LDYuODI3MjQ1MjEgNS45MTk5NDQyMSw2LjkxNDAyNjI0IDUuOSw3IEw1LjkzMjIxNzU3LDUuMzcyMTQ5MzQgQzUuOTUxNzg5ODcsNS4yNTI0NzIyNSA1Ljk3NDQ3Njk5LDUuMTI3MTQ0MyA2LDUgTTQuMjE2MzE2NjQsNCBMNCw0IEw0LDQuODQwNDgwNzYgQzQuMDQ4NjI2ODIsNC44NzE5MTUyMyA0LjA5ODU0NjA0LDQuOTAyMzU0MDMgNC4xNDkyNzMwMiw0LjkzMTkzOTQxIEw0LjA2MjE5NzA5LDQuMDA2Njg1MTYgTDQuMTAxNzc3MDYsNC4wMDM5ODI2NSBMNC4xOTE1OTkzNSw0Ljk1NzM5OTkgQzQuMjYyNjgxNzQsNC45OTczNjg2MSA0LjMzNTcwMjc1LDUuMDM0OTE5MjggNC40MTA1MDA4MSw1LjA3MDYyMDg3IEw0LjMyMTY0NzgyLDQuMTI3MzAyNDcgTDQuMzYxNTUwODksNC4xMjQ0NTc3MiBMNC40NTI2NjU1OSw1LjA5MTEwMzA1IEw0LjQ2OTQ2Njg4LDUuMDk5MDY4MzUgQzQuNTM2ODMzNiw1LjEyOTc5MTYyIDQuNjA0MDM4NzcsNS4xNjE3OTUwNCA0LjY3MTA4MjM5LDUuMTk0NTA5NjQgTDQuNTc1NzY3MzcsNC4yMTI2NDQ5IEw0LjYxNTUwODg5LDQuMjA5NTE1NjggTDQuNzEzMDg1NjIsNS4yMTU0MTg1MyBDNC43ODgyMDY3OSw1LjI1MjQwMDI2IDQuODYyODQzMyw1LjI5MDk0NjU5IDQuOTM2ODMzNiw1LjMyOTc3NzQgTDQuODIwODQwMDYsNC4xNDAxMDM4MyBMNC44NjA1ODE1OCw0LjEzNzExNjg1IEw0Ljk3ODk5ODM4LDUuMzUyMjUwOTEgQzUuMDUzOTU4LDUuMzkyNjQ2MzMgNS4xMjc2MjUyLDUuNDM0MTc5NjUgNS4yMDA0ODQ2NSw1LjQ3NTcxMjk2IEw1LjA4MTkwNjMsNC4yNTg4NzIwNiBMNS4xMjE2NDc4Miw0LjI1NTg4NTA3IEw1LjI0Mjk3MjU0LDUuNTAwMzIwMDMgQzUuMzE3OTMyMTUsNS41NDQxMjkxNSA1LjM5MTQzNzgsNS41ODgyMjI3NCA1LjQ2MzAwNDg1LDUuNjMyODg1MjkgTDUuMzQ0NTg4MDUsNC40MDI4MTYzIEw1LjM4NDQ5MTExLDQuMzk5Njg3MDggTDUuNTA1ODE1ODMsNS42NjAwNTI2MyBDNS41ODEyNjAxLDUuNzA3NzAyMTUgNS42NTU0MTE5NSw1Ljc1NTc3ODM5IDUuNzI2NjU1OSw1LjgwNDQyMzU4IEw1LjYwNzc1NDQ0LDQuNTcyMDc4OCBMNS42NDc4MTkwNiw0LjU2OTM3NjI5IEw1Ljc2OTYyODQzLDUuODM0MTUxMiBDNS44NDk0MzQ1Nyw1Ljg4OTQ4MTU0IDUuOTI2OTc5LDUuOTQ0ODExODkgNiw2IEw1Ljg4MDI5MDc5LDQuODA2MDU5MzEgTDUuOTE2MzE2NjQsNC44MDMzNTY4IEM1Ljc4NzU2MDU4LDQuNjczNjM2MyA1LjY0MDcxMDgyLDQuNTQ1NDgwNDEgNS40NzQ5NTk2MSw0LjQzODM3NTY1IEM0Ljk1MTIxMTYzLDQuMTAxNTU3NSA0Ljc0ODYyNjgyLDQuMDIyMTg5MDMgNC42ODQzMjk1Niw0LjAwMzk4MjY1IEw0LjcwNzEwODI0LDQuMTM1Njk0NDcgTDQuNzAwMTYxNTUsNC4xNTEzNDA1OSBMNC42ODE3NDQ3NSw0LjE1NTAzODc2IEM0LjY3ODE5MDYzLDQuMTU0MDQzMSA0LjQ4OTAxNDU0LDQuMTAzNjkxMDYgNC4yMTYzMTY2NCw0IiBpZD0iRmlsbC05IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljk5NDI2Nzk4LDQgTDQuOTk5MjMzMywzLjk5NzQ1NDI2IEw1LDMuOTg2NDc1NzQgTDQuOTgwMDY1NzIsMy45IEw0Ljk2MDIwNDQ1LDMuOSBDNC45NjExMTcyLDMuOTEzNDQ0NzEgNC45NjEyNjMyMywzLjkyMzk0NTkgNC45NTg3MDc1NiwzLjkyMzk0NTkgQzQuOTU4NDg4NSwzLjkyMzk0NTkgNC45NTgyMzI5MywzLjkyMzg2NjM1IDQuOTU3OTc3MzYsMy45MjM3MDcyNCBDNC45NDk1NDM2MywzLjkxNjA3MDAxIDQuOTQxMjU1OTMsMy45MDgxMTQ1NiA0LjkzMzExNDI4LDMuOSBMNC45LDMuOSBDNC45NTY1OSwzLjk2NjkwNTMzIDQuOTkzNjQ3MzIsMy45OTkzNjM1NiA0Ljk5NDI2Nzk4LDQgTTIuMTAzODQ5NiwyIEwyLjA5MTkxMjg2LDIuMDE1OTA2NjggQzIuMDUxOTI0OCwyLjQ5ODI2MjA1IDIuMjMyMDIwMjksMy4xOTgxNTYgMi4yODE1NTc3NCwzLjM3OTQ2MjcxIEMyLjE3NzExMTMxLDMuMzA0OTM2OTYgMi4wMzQxNjg5LDMuMTE5NjUzNTkgMi4wMzI1Mjc2LDMuMTE3NTkxNjEgTDIuMDA5OTk3MDIsMy4xMTI0MzY2NyBMMiwzLjEzMjkwOTE2IEMyLjMyMzYzNDc0LDQuNDcxMjc5NiAzLjA2MDEzMTMsNS4xMjg2MDg0NiAzLjI5MDM2MTA5LDUuMzA2MzgwMzUgQzMuMTcyMTg3NDEsNS4yNzQyNzI0MiAyLjk1NjI4MTcxLDUuMjAyODM5NjQgMi44MDUyODIwMSw1LjE1MDcwMTA3IEwyLjc4NDM5MjcyLDUuMTU3MTgxNTcgTDIuNzg0MzkyNzIsNS4xNzg1Mzc3NiBDMy4yMDE3MzA4Myw1Ljc1NzIxNjkyIDQuMjYxMjY1MjksNi4yODUyMzAzNSA0LjU4MDEyNTM0LDYuNDM1MTY1NTUgQzQuMzg2NjAxMDEsNi40MTIxODkyMyA0LjA2Njg0NTcyLDYuMzQ1MTc0OTcgNC4wNjI5NjYyOCw2LjM0NDI5MTI3IEw0LjA0MjY3MzgzLDYuMzU0NjAxMTUgTDQuMDQ3ODk2MTUsNi4zNzYzOTkyIEM0LjM3MDMzNzIxLDYuNjI3MDc2NzEgNC42OTUxNjU2Miw2LjgzMjY4NTI4IDUsNyBMNSw2Ljg2OTk0ODE2IEM0Ljg4Mjg3MDc4LDYuODA2MTc0MTUgNC43NjExMTYwOCw2LjczNjUwODc4IDQuNjM1MzMyNzQsNi42NjAzNjI5MSBDNC41MzE3ODE1Niw2LjU5OTM4NzMgNC40NDc0NzgzNiw2LjU0NzY5MDU5IDQuMzg5Mjg2NzgsNi41MTE0NTg3IEM0LjM5MzE2NjIyLDYuNTEyMTk1MTIgNC4zOTcxOTQ4Nyw2LjUxMzA3ODgzIDQuNDAxMDc0MzEsNi41MTM4MTUyNSBDNC4zNDA3OTM3OSw2LjQ3NDkzMjI1IDQuMjc5OTE2NDQsNi40MzQ1NzY0MSA0LjIxODI5MzA1LDYuMzkyODk1MDIgQzQuMjE4MjkzMDUsNi4zOTI4OTUwMiA0LjY1MDcwMTI4LDYuNDY2Njg0MzQgNC43OTg4NjYwMSw2LjQ2NjY4NDM0IEM0Ljc5ODg2NjAxLDYuNDY2Njg0MzQgNC4yNjE0MTQ1LDYuMTgyNTczMzUgMy43NDU1OTgzMyw1Ljg0NDg1MDk1IEMzLjMzNDA3OTM4LDUuNTgyODMyNTcgMy4xMzI2NDY5Nyw1LjQwNjgyODA5IDMuMDQ0NjEzNTUsNS4zMTk0ODg2MyBDMy4wNDgwNDUzNiw1LjMyMDk2MTQ3IDMuMDUxNDc3MTcsNS4zMjIyODcwMyAzLjA1NDkwODk4LDUuMzIzNjEyNTggQzMuMDEzODc2NDUsNS4yODQ4NzY4NyAyLjk3NzAyMTc4LDUuMjQ3MDI0ODYgMi45NDUwOTEwMiw1LjIxMDM1MTEzIEMyLjk0NTA5MTAyLDUuMjEwMzUxMTMgMy4yMjg0MzkyNyw1LjMzMTEyNDA3IDMuNTUxNjI2MzgsNS4zNzA0NDg5MiBDMy41NTE2MjYzOCw1LjM3MDQ0ODkyIDIuNjMwNDA4ODMsNC44Njg2NTIwNiAyLjIwMjYyNjA4LDMuNTEzNjM4NTEgQzIuMTgwMDk1NDksMy40NTY5MzQxMyAyLjE2MjE5MDM5LDMuNDA5NTA4NjYgMi4xNDkyMDkxOSwzLjM3Mzg2NTkxIEMyLjE1NDU4MDcyLDMuMzc4ODczNTcgMi4xNTk5NTIyNSwzLjM4MzczMzk1IDIuMTY1MTc0NTcsMy4zODg0NDcwNCBDMi4xNTA3MDEyOCwzLjMzNzA0NDg5IDIuMTM2OTc0MDQsMy4yODQxNjk5MSAyLjEyMzg0MzYzLDMuMjMwNDExMjIgQzIuMTIzODQzNjMsMy4yMzA0MTEyMiAyLjE2NjIxOTA0LDMuMzUyMzYyNDQgMi40MDY1OTUwNSwzLjQ4MTA4ODcyIEMyLjIxODc0MDY3LDIuNzU5OTg1ODYgMi4xNzE3Mzk3OCwyLjI5Mjk0ODA0IDIuMTYwMzk5ODgsMi4xMzI0MDgzOSBDMi4xNjkzNTI0MywyLjE0MzQ1NDcgMi4xNzk2NDc4NywyLjE1NTgyNjU2IDIuMTkxNTg0NiwyLjE2OTUyMzk4IEMyLjE5MDY4OTM1LDIuMTQ1NjYzOTYgMi4xOTAwOTI1MSwyLjEyMTY1NjY1IDIuMTg5Nzk0MDksMi4wOTc5NDM5MSBDMi4xODk3OTQwOSwyLjA5Nzk0MzkxIDMuMTc1MzIwOCwzLjIzMDExNjY1IDQuNDMzMzAzNDksMy43MjU3Mjc1OCBMNC42MjI3OTkxNiwzLjcyNTcyNzU4IEM0LjM4OTczNDQxLDMuNjM0NDExNDUgMy43Njk2MjEwMSwzLjM4MTk2NjU0IDMuNDc1MDgyMDcsMy4xNzE3OTIxNSBDMi45MjAwMjM4NywyLjc3NTQ1MDY5IDIuMTMxMTU0ODgsMi4wMTE3ODI3MyAyLjEyMzI0Njc5LDIuMDA0MTIzOTUgTDIuMTAzODQ5NiwyIiBpZD0iRmlsbC0xMCIgZmlsbD0iIzk5OTk5OSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNiw3IEw2LDcuMTY4MTU4NDUgQzYuNTQwMTQzMjcsNy43ODMwODg5NCA2Ljk3ODIzMDUzLDcuOTk2MTkxMiA2Ljk4NDE4NDU4LDcuOTk4ODU3MzYgTDYuOTg2Nzg5NDcsOCBMNi45OTM3NjY4Niw3Ljk5NTA0ODU2IEw2Ljk5ODMyNTQzLDcuOTc2OTU2NzcgTDcsNy44MzQ1MDc3MSBMNi45OTAyMzE2NSw3LjgxMDg5MzE2IEM2Ljk4MTQ4NjY1LDcuODA4MjI3IDYuOTcyNzQxNjUsNy44MDUzNzA0MSA2Ljk2MzgxMDU5LDcuODAyMzIzMzcgTDYuOTYzODEwNTksNy44MTg4OTE2NCBDNi45NjM4MTA1OSw3LjgxODg5MTY0IDYuOTA3NzEyMzUsNy43OTM5NDQwMSA2LjgwNzIzNzg4LDcuNzI4MDUxOCBDNi42Mjc1MDAyMyw3LjYyMjkyODk3IDYuNDI5NjIxMzYsNy40NDc1MzM4IDYuMjQ1NTExMjEsNy4yNjAzMzEzNyBDNi4xNjgyMDE2OSw3LjE4MzU4NDA4IDYuMDg2MDU0NTIsNy4wOTY5MzM5MiA2LDcgTTQuOTA0MDMxNTUsNCBMNC45MjkzMjU1Niw0IEw0LjkyNjQ0Mjc4LDMuOTg3NyBDNC45MzA0ODc5NywzLjk5MTEgNC45MzUzNzAwOCwzLjk5NTIgNC45NDA5NDk2NCw0IEw1LDQgQzQuOTY4NDc1NDgsMy45NzI5IDQuOTM2MzkzLDMuOTQ4NyA0LjkwMzg5MjA2LDMuOTI3OCBDNC45MDM1MjAwOSwzLjkyNzYgNC45MDMxOTQ2MSwzLjkyNzUgNC45MDI4NjkxNCwzLjkyNzUgQzQuODk4MTI2NTEsMy45Mjc1IDQuOTAwMjE4ODUsMy45NTMxIDQuOTAyMzU3NjgsMy45Nzg4IEM0LjkwMjk2MjEzLDMuOTg2IDQuOTAzNTY2NTgsMy45OTMzIDQuOTA0MDMxNTUsNCBNNS4wODY2OTQ3LDQgTDUsNCBDNS41NDgzNjU1MSw0LjI2NjA4MDk5IDUuODYzMzE0ODUsNC43NDQzMTk5IDYsNSBMNS45OTU4ODk4OSw0Ljk0MDUyMzA3IEw1Ljk5NDM2MDU0LDQuOTM1MjcyMTQgQzUuOTMxMjc1MDksNC44MTk3NTE1OSA1LjcwNTAyNzcyLDQuNDI3NTQ3MjEgNS40NDU4MDM4Niw0LjIzNDk3OTMgQzUuMzExNzk1MDcsNC4xMzU4MTc0MyA1LjE4NzQ0MDI2LDQuMDU3NzYwMjcgNS4wODY2OTQ3LDQiIGlkPSJGaWxsLTExIiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljk5NDI0NzA2LDUgQzUuMDAxMjQ3MDYsNSA1LjAwMDg0NzA2LDQuOTg2OCA0Ljk5ODM0NzA2LDQuOTY5OSBMNC45MjQxNDcwNiw0Ljk2OTkgQzQuOTQ2NDQ3MDYsNC45ODAxIDQuOTY5MTQ3MDYsNC45OTAxIDQuOTkyMjQ3MDYsNC45OTk3IEM0Ljk5Mjk0NzA2LDQuOTk5OSA0Ljk5MzY0NzA2LDUgNC45OTQyNDcwNiw1IE0yLjksNSBDMi45MzAxNzA0NSw0Ljg3NjMzODMzIDIuOTU3OTU0NTUsNC43NTMyMTE5OSAyLjk4MzI5NTQ1LDQuNjMzMjk3NjQgTDMsNCBDMi45NzMxMjUsNC4wNjcyNzMzOCAyLjk0NDE0NzczLDQuMTM2NTA5NjQgMi45MTQwOTA5MSw0LjIwNjgxNjU2IEwyLjkyMTQyMDQ1LDQuMjA4NjAxIEwyLjksNSBNMi45LDUgQzIuOTM1MjM1NzMsNC44MDE4MDE4IDIuOTY2MDA0OTYsNC42MTE5MzY5NCAyLjk5MjMwNzY5LDQuNDM5MTg5MTkgTDMsNCBDMi45NzQxOTM1NSw0LjA3OTk1NDk1IDIuOTQ2NDY0MDIsNC4xNjI4Mzc4NCAyLjkxNzA1OTU1LDQuMjQ4ODczODcgTDIuOSw1IE0xLjksMi45IEMxLjk0NzM4ODA2LDIuOTQzMDc0MTQgMS45ODA1MjIzOSwyLjk3ODExOTM1IDIsMyBDMS45NzE5NDAzLDIuOTg3NDE0MSAxLjk0MTQxNzkxLDIuOTc0MTc3MjIgMS45MDc4MzU4MiwyLjk2MDA3MjMzIEwxLjksMi45IE0yLDMgQzIuMDAwMzk5MDQsMy4wMjcwOTgyOSAyLjAwMTE5NzEzLDMuMDU0NTMzMjEgMi4wMDIzOTQyNSwzLjA4MTc5OTgyIEMyLjA4MTYwNDE1LDMuMTU5NzI4NDYgMi4yMTA4OTM4NSwzLjI3NTUyNzM4IDIuMzg2MDczNDIsMy40MTYwNjgyMiBDMi42MzgyNjgxNiw0LjAwMjYzNjg5IDMuNDg0NDM3MzUsNS4zMjM4ODkxNCA0LjYwMTM1Njc0LDYgTDQuNjAxMzU2NzQsNS44NTQ3NDY0MSBDNC41NzA0MzA5Nyw1LjgzNTU1ODggNC41Mzk3MDQ3MSw1LjgxNjAzNDU2IDQuNTA5Mzc3NDksNS43OTYxNzM3IEw0LjQwMjQzNDE2LDQuNzEyMjQxOTIgTDQuMzUzMzUxOTYsNC43MTU5NDQ3OSBMNC40NTYzMDQ4Nyw1Ljc2MDE1NDg1IEM0LjM2MTczMTg0LDUuNjk2NzAxMDggNC4yNzA3NTAyLDUuNjMwODkwOTMgNC4xODI3NjEzNyw1LjU2Mjg5MjczIEw0LjA3NzgxMzI1LDQuNTUxMTY2OTcgTDQuMDI4OTMwNTcsNC41NTQ4Njk4NCBMNC4xMjg4OTA2Niw1LjUyMDk4Mjk0IEM0LjAyOTkyODE3LDUuNDQyMjEyNzUgMy45MzUxNTU2Myw1LjM2MTQyMjggMy44NDQ5NzIwNyw1LjI3OTI4NjM2IEwzLjc0OTgwMDQ4LDQuMzUwNzA2OTEgTDMuNzAwNzE4MjgsNC4zNTQ0MDk3OCBMMy43OTA1MDI3OSw1LjIyNzk1MTA4IEMzLjY4Nzk0ODkyLDUuMTMxODQ0NyAzLjU5MDc4MjEyLDUuMDM0MzkxODMgMy41MDAxOTk1Miw0LjkzNjkzODk2IEwzLjQyMDM5MTA2LDQuMTQzNTE0MzYgQzMuNTQyMDk4OTYsNC4yMTk3NTk4NyAzLjY3MDE5MTU0LDQuMjk3MDE1MjYgMy44MDYyNjQ5Niw0LjM3NTYxNzE1IEM0LjE4MzE2MDQyLDQuNTkwMDQ3MTMgNC41NjcyMzg2Myw0Ljc1MDQ0ODgzIDQuODY4NTE1NTYsNC44NjAxODg1MSBMNSw0Ljg2MDE4ODUxIEMzLjMxNzgzNzE5LDQuMjkzODE3MzIgMiwzIDIsMyIgaWQ9IkZpbGwtMTIiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuOSw3IEM2LjkxOTA1NDQ0LDYuODkyODI3MTggNi45NDE1OTUwMyw2Ljc4MDQxMTA3IDYuOTY3NDc4NTEsNi42NjQ4NDg5OSBMNyw1IEM2Ljk2NjY2NjY3LDUuMjEzMDg3MjUgNi45NDMxMjMyMSw1LjM5MzI0NjY0IDYuOTMxOTAwNjcsNS40ODQwNjA0IEw2LjkyOTY1NjE2LDUuNDg4MDQ1MyBMNi45LDcgTTUuOSw3IEM1LjkxOTk0NDIxLDYuOTE0MDI2MjQgNS45NDE0NjkwOCw2LjgyNzI0NTIxIDUuOTY0NTc0NjIsNi43Mzk0NTUxIEw2LDUgQzUuOTc0NDc2OTksNS4xMjcxNDQzIDUuOTUxNzg5ODcsNS4yNTI0NzIyNSA1LjkzMjIxNzU3LDUuMzcyMTQ5MzQgTDUuOSw3IE00Ljg5NDkzMjk0LDQgTDQuNzU2NzA2NDEsNCBDNC43NTg1NjkzLDQuMDEwNzM0MzEgNC43NjA5OTEwNiw0LjAyMjQyOTkxIDQuNzYzNDEyODIsNC4wMzM5NjUyOSBDNC43NzE5ODIxMiw0LjA3NTE0MDE5IDQuNzgwMzY1MTMsNC4xMTYxNTQ4NyA0Ljc2MTM2MzY0LDQuMTE2MTU0ODcgQzQuNzYwMDU5NjEsNC4xMTYxNTQ4NyA0Ljc1ODc1NTU5LDQuMTE1OTk0NjYgNC43NTcyNjUyOCw0LjExNTY3NDIzIEM0LjYyNzA0OTE4LDQuMDgyMTg5NTkgNC40OTg1MDk2OSw0LjA0MzQxNzg5IDQuMzcyMjA1NjYsNCBMNC4yNDk0NDExMyw0IEM0LjU2Mzg5NzE3LDQuMTE2Nzk1NzMgNC43ODIwNDE3Myw0LjE3MzUxMTM1IDQuNzg2MTQwMDksNC4xNzQ2MzI4NCBMNC44MDczNzcwNSw0LjE3MDQ2NzI5IEw0LjgxNTM4NzQ4LDQuMTUyODQzNzkgTDQuNzg5MTIwNzIsNC4wMDQ0ODU5OCBDNC44NjMyNjM3OSw0LjAyNDk5MzMyIDUuMDk2ODcwMzQsNC4xMTQzOTI1MiA1LjcwMDgxOTY3LDQuNDkzNzc4MzcgQzUuODkxOTUyMzEsNC42MTQ0MTkyMyA2LjA2MTI4OTEyLDQuNzU4NzcxNyA2LjIwOTc2MTU1LDQuOTA0ODg2NTIgTDYuMTY4MjE5MDgsNC45MDc5MzA1NyBMNi4zMDYyNTkzMSw2LjI1Mjc2MzY4IEM2LjIyMjA1NjYzLDYuMTkwNjAwOCA2LjEzMjYzNzg1LDYuMTI4Mjc3NyA2LjA0MDYxMTAzLDYuMDY1OTU0NjEgTDUuOTAwMTQ5MDMsNC42NDEzMzUxMSBMNS44NTM5NDkzMyw0LjY0NDM3OTE3IEw1Ljk5MTA1ODEyLDYuMDMyNDY5OTYgQzUuOTA4OTA0NjIsNS45Nzc2NzY5IDUuODIzMzk3OTEsNS45MjM1MjQ3IDUuNzM2NDAwODksNS44Njk4NTMxNCBMNS41OTY0OTc3Niw0LjQ1MDIwMDI3IEw1LjU1MDQ4NDM1LDQuNDUzNzI0OTcgTDUuNjg3MDM0MjgsNS44MzkyNTIzNCBDNS42MDQ1MDgyLDUuNzg4OTQ1MjYgNS41MTk3NDY2NSw1LjczOTI3OTA0IDUuNDMzMzA4NDksNS42ODk5MzMyNCBMNS4yOTM0MDUzNyw0LjI4ODIyNDMgTDUuMjQ3NTc4MjQsNC4yOTE1ODg3OSBMNS4zODQzMTQ0Niw1LjY2MjIxNjI5IEM1LjMwMDI5ODA2LDUuNjE1NDMzOTEgNS4yMTUzNTAyMiw1LjU2ODY1MTU0IDUuMTI4OTEyMDcsNS41MjMxNTA4NyBMNC45OTIzNjIxNSw0LjE1NDQ0NTkzIEw0Ljk0NjUzNTAyLDQuMTU3ODEwNDEgTDUuMDgwMjkwNjEsNS40OTc4MzcxMiBDNC45OTQ5NzAxOSw1LjQ1NDA5ODggNC45MDg5MDQ2Miw1LjQxMDY4MDkxIDQuODIyMjgwMTgsNS4zNjkwMjUzNyBMNC43MDk3NjE1NSw0LjIzNTk5NDY2IEw0LjY2MzkzNDQzLDQuMjM5NTE5MzYgTDQuNzczODQ1MDEsNS4zNDU0NzM5NyBDNC42OTY1MzUwMiw1LjMwODYyNDgzIDQuNjE5MDM4NzUsNS4yNzI1NzY3NyA0LjU0MTM1NjE4LDUuMjM3OTcwNjMgTDQuNTIxOTgyMTIsNS4yMjg5OTg2NiBMNC40MTY5MTUwNSw0LjE0MDE4NjkyIEw0LjM3MDkwMTY0LDQuMTQzMzkxMTkgTDQuNDczMzYwNjYsNS4yMDU5Mjc5IEM0LjM4NzEwODc5LDUuMTY1NzE0MjkgNC4zMDI5MDYxMSw1LjEyMzQxNzg5IDQuMjIwOTM4OSw1LjA3ODM5Nzg2IEw0LjExNzM2MjE1LDQuMDA0NDg1OTggTDQuMDcxNzIxMzEsNC4wMDc1MzAwNCBMNC4xNzIxMzExNSw1LjA0OTcxOTYzIEM0LjExMzYzNjM2LDUuMDE2Mzk1MTkgNC4wNTYwNzMwMyw0Ljk4MjEwOTQ4IDQsNC45NDY3MDIyNyBMNCw1LjA4NDk2NjYyIEM0LjEwNjE4NDgsNS4xNTA0OTM5OSA0LjIxNDc5MTM2LDUuMjA5NjEyODIgNC4zMjYwMDU5Niw1LjI2MTA0MTM5IEM2LjM2MTk1OTc2LDYuMjAzODk4NTMgNi45MDI1NzA3OSw2LjkxMjY4MzU4IDYuOTU3NTI2MDgsNi45OTAzODcxOCBMNi45NzcyNzI3Myw3IEw2Ljk4NDE2NTQyLDYuOTk5MDM4NzIgTDcsNi45Nzg2OTE1OSBMNi45OTIxNzU4Niw2Ljg3NDM5MjUyIEw2Ljk4Nzg5MTIxLDYuODYzOTc4NjQgTDYuOTgwODEyMjIsNi44NTYxMjgxNyBMNi44NTcxMTYyNCw1LjYxOTU5OTQ3IEw2Ljg0NjY4NDA1LDUuNjIwNDAwNTMgTDYuODQzODg5NzIsNS41ODY1OTU0NiBDNi41Nzc0OTYyNyw1LjE4MDkzNDU4IDUuOTYzNjczNjIsNC40MjIxNjI4OCA0Ljg5NDkzMjk0LDQiIGlkPSJGaWxsLTEzIiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDggQzQuOTY1NTA3MzYsNy45NjM2NjgzMSA0LjkzMjExOTQ4LDcuOTMwNDI4NjcgNC45LDcuOSBMNC45LDcuOTAxMzM1MjEgQzQuOTM3MzU2NzksNy45MzY3NTMzNCA0Ljk3MTM1ODQzLDcuOTcwNjI1NDQgNSw4IE00LDcgQzQuNDQ1NDMyMjksNy40ODA2MTIwMyA0LjkwOTU0Nzc0LDcuODg0OTI5NzggNC45MDk1NDc3NCw3Ljg4NDkyOTc4IEM0Ljc4MTYwMDMxLDcuODg0OTI5NzggNC40MDgxOTQ4Miw3Ljc3OTkyMDM1IDQuNDA4MTk0ODIsNy43Nzk5MjAzNSBDNC40NjE0MDk2MSw3LjgzOTIzNzA2IDQuNTEzOTgwMTYsNy44OTY2NjczNyA0LjU2NjAzNTMsNy45NTIwMDE2OCBDNC42NjI0MTQ2NCw3Ljk4Mzg2MDgzIDQuNzUwNTQ3NjEsOCA0LjgyODg4ODAzLDggQzQuOTM4MTUyMyw4IDQuOTg4MDE3MDEsNy45Njc5MzEyNSA0Ljk4OTk0OTc1LDcuOTY2NDY0MDUgTDUsNy45NDM2MTc2OSBMNC45OTE0OTU5NCw3LjkxOTUxMzczIEM0LjU2MTY1NDQzLDcuNTU4MzczNTEgNC4yMzk2NTk4NCw3LjI1MTMxIDQsNyBNMiw0IEMyLjMwMDE3Nzk5LDUuNDEyNzc2NDEgMi45NDY2MDI0NSw1LjkzNTk2NDM3IDIuOTQ2NjAyNDUsNS45MzU5NjQzNyBDMi43MTk4MTk5MSw1Ljg5NDk2MzE0IDIuNTIwOTkyNTcsNS43NjkwNDE3NyAyLjUyMDk5MjU3LDUuNzY5MDQxNzcgQzIuNTQzMzk4Niw1LjgwNzI3ODg3IDIuNTY5MjU5NzYsNS44NDY3NDQ0NyAyLjU5ODA1MjU2LDUuODg3MTMxNDUgQzIuNzg0MTA2MzgsNS45OTcyMzU4NyAyLjk3ODExNzQ3LDYgMi45ODczMzExNyw2IEwzLDUuOTg1NTY1MTEgTDIuOTkzMTk0NDMsNS45NjQyMTk5IEMyLjQ3MDk0NTQ1LDUuNTgxMzg4MjEgMi4xMjc2MzA2MSw0LjQ3NjE5Nzc5IDIsNCBNMiw0IEMxLjk5NTUxOTM1LDMuOTgyNzI1OTggMS45OTA4MzUwMywzLjk2NTczNTkyIDEuOTg1ODk2MTMsMy45NDkyMTkxMiBDMS45NDAwMjAzNywzLjkxMDQ1OTA2IDEuOTA5NTcyMywzLjkwMDQ3MzI2IDEuOTA4MDk1NzIsMy45IEwxLjkwMTg4MzkxLDMuOTAxMjMwNDggTDEuOSwzLjkwNzAwNDI2IEMxLjkwMTE3MTA4LDMuOTExMTY4OTUgMS45MDIzNDIxNiwzLjkxNTMzMzY1IDEuOTAzNTEzMjQsMy45MTk0NTEwMiBDMS45ODU1Mzk3MSwzLjk2MDgxNDAxIDIsNCAyLDQiIGlkPSJGaWxsLTE0IiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDkgQzYuOTM1ODI4ODgsOC45NjU0IDYuOSw4Ljk1MjMgNi45LDguOTUyMyBMNi45LDguOTYxIEM2LjkzMTkwNzMxLDguOTcwMSA2Ljk2NTQxODg5LDguOTgzNCA3LDkgTTUsOCBMNSw3Ljk5ODYyOTE1IEM1LjM1MDUxMTU2LDcuOTYxOTA0NzYgNS42ODUxMDgsNy45MjkwNzY0OCA2LDcuOSBDNS42NDk4NjczNyw3LjkzMzExNjg4IDUuMzEyMjM5NDgsNy45NjcxNzE3MiA1LDgiIGlkPSJGaWxsLTE1IiBmaWxsPSIjOTk5OTk5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
                        Journaliste
                                                                - <a class="fig-author__link-bio" href="http://plus.lefigaro.fr/page/csapin-0" title="Voir la biographie de Charles Sapin">Sa biographie</a>
                                    </div>

                                    <div class="fig-author__follow" data-component="author-follow" data-ga='{"customCategorie" :"engagement","customAction":"followJournalist","customLabel":"Charles Sapin","event":"customEventSPE"}'>
                        <div class="fpApp-suivre-container" data-type="suivre" data-appId="81325031242245596367369127435013" data-uid="3275690" ></div>
                    </div>
                
                                    <span class="fig-author__followers">
                        16 abonnés                    </span>
                            </div>
            </div>

            <div class="fig-author__list">
            <div class="fig-author__header">Ses derniers articles</div>
            <ul>
                                    <li class="fig-author__link-item">
                        <a href="http://www.lefigaro.fr/politique/2018/02/28/01002-20180228ARTFIG00357-marine-le-pen-se-reve-en-porte-voix-de-la-ruralite.php">Marine Le Pen se rêve en porte-voix de la ruralité</a>
                    </li>
                                    <li class="fig-author__link-item">
                        <a href="http://www.lefigaro.fr/politique/2018/02/27/01002-20180227ARTFIG00305-wauquiez-campe-une-droite-des-champs.php">Wauquiez campe une droite des champs</a>
                    </li>
                            </ul>
        </div>
    </div>            </div>
    
            <div class="fig-outbrain">
                    <div data-ob-template="lefigaro" class="OUTBRAIN" data-widget-id="AR_3" data-src="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php">&nbsp;</div>
                    <div data-ob-template="lefigaro" class="OUTBRAIN" data-widget-id="AR_8" data-src="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php">&nbsp;</div>
            </div>
    <script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>


            <div class="fig-content__col-left">
                        <div class="fig-tags" data-component="fig-tags" data-fidji-source="lefigaro.fr" data-fidji-exclude-id="20180301ARTFIG00158" data-fgtcs-crosslinks="Structurel">
    <div class="fig-header-block">
        <div class="fig-title-block">Sur le même sujet</div>
    </div>
    <div class="fig-tags__list">
        <div class="fig-tags__nav">
            <span class="fig-tags__nav-arrow fig-tags__nav-arrow--left fig-tags__nav-arrow--disabled" aria-label="Défiler sur la gauche" tabindex="0"><span aria-hidden="true" class="fig-icon-chevron-left"></span></span>
            <span class="fig-tags__nav-arrow fig-tags__nav-arrow--right" aria-label="Défiler sur la droite" tabindex="0"><span aria-hidden="true" class="fig-icon-chevron-right"></span></span>
        </div>
        <ul class="fig-tags__items" role="tablist">
                            <li data-term="Marine Le Pen"
                    class="fig-tags__item fig-secondary-background fig-tags__item--current" aria-selected="true"                    role="tab" id="marine-le-pen" tabindex="0">
                    <span>Marine Le Pen</span>
                </li>
                            <li data-term="Gilbert Collard"
                    class="fig-tags__item fig-secondary-background"                    role="tab" id="gilbert-collard" tabindex="0">
                    <span>Gilbert Collard</span>
                </li>
                    </ul>
    </div>
    <div class="fig-tags__articles-container" role="tabpanel" aria-labelledby="marine-le-pen" aria-live="polite" aria-busy="false">
        <div class="fig-tags__content">
            <ul class="fig-tags__articles">
                            <li class="fig-tags__article">
                    <a href="http://www.lefigaro.fr/politique/2018/02/28/01002-20180228ARTFIG00357-marine-le-pen-se-reve-en-porte-voix-de-la-ruralite.php" >
                                                    <img src="http://i.f1g.fr/media/figaro/122x79_crop/2018/02/28/XVMfe2a6ba0-1c92-11e8-b636-4cb4c2a09bff.jpg" width="122" height="79" alt="Marine Le Pen se rêve en porte-voix de la ruralité"/>
                                                Marine Le Pen se rêve en porte-voix de la ruralité
                    </a>
                </li>
                            <li class="fig-tags__article">
                    <a href="http://www.lefigaro.fr/politique/2018/02/26/01002-20180226ARTFIG00285-guillaume-tabard-apres-tant-de-sortiessoigner-sa-sortie.php" class="fig-tags__article-premium" title="Guillaume Tabard : «Après tant de sorties, soigner sa sortie» (article Premium)">
                                                Guillaume Tabard : «Après tant de sorties, soigner sa sortie»
                    </a>
                </li>
                            <li class="fig-tags__article">
                    <a href="http://www.lefigaro.fr/politique/le-scan/2018/02/25/25001-20180225ARTFIG00125-marine-le-pen-se-dit-epatee-par-sa-niece-marion-marechal-le-pen.php" >
                                                Marine Le Pen se dit «épatée» par sa nièce Marion Maréchal-Le Pen
                    </a>
                </li>
                            <li class="fig-tags__article">
                    <a href="http://www.lefigaro.fr/politique/2018/02/23/01002-20180223ARTFIG00285-un-ballet-ininterrompu-de-responsables-politiques-au-salon-de-l-agriculture.php" class="fig-tags__article-premium" title="Salon de l'agriculture : un ballet ininterrompu de responsables politiques (article Premium)">
                                                Salon de l'agriculture : un ballet ininterrompu de responsables politiques
                    </a>
                </li>
                    </ul>
    </div>

<div class="fig-tags__articles-footer js-fig-tags__articles-footer">Thématique&nbsp;:
    <a class="fig-tags__thematique" href="http://plus.lefigaro.fr/tag/marine-le-pen">Marine Le Pen</a>&nbsp;
            <div class="fpApp-suivretag-container" data-type="suivre" data-entite="tag" data-term="Marine Le Pen" title="Suivre Marine Le Pen">Suivre</div>
    </div>    </div>
</div>        </div>
                    <div class="fig-content__col-right">
                                <div class="fig-tags" data-component="fig-rubrique" data-fidji-source="lefigaro.fr" data-fidji-section="Le Scan" data-fidji-exclude-id="20180301ARTFIG00158" data-fgtcs-crosslinks="Structurel">
    <div class="fig-header-block">
        <div class="fig-title-block">Le Scan</div>
    </div>
    <div class="fig-tags__list">
        <ul class="fig-tags__items fig-tags__items--most" role="tablist">
                        <li role="tab" data-slug="mostrecent" id="mostrecent" tabindex="0" aria-selected="true"
                class="fig-tags__item fig-tags__item--current fig-secondary-background"><span>+ récents</span></li>
                                    <li role="tab" data-slug="mostcommented" id="mostcommented" tabindex="0"
                class="fig-tags__item fig-secondary-background"><span>+ commentés</span></li>
                                    <li role="tab" data-slug="mostshared" id="mostshared" tabindex="0"
                class="fig-tags__item fig-secondary-background"><span>+ partagés</span></li>
                    </ul>
    </div>

    <div class="fig-tags__content" role="tabpanel" aria-labelledby="mostrecent" aria-live="polite" aria-busy="false">
            <ul class="fig-tags__articles">
                    <li class="fig-tags__article">
                <a href="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00147-au-tchad-larcher-rend-visite-aux-soldats-de-l-operation-barkhane.php" >
                                            <img src="http://i.f1g.fr/media/figaro/122x79_crop/2018/03/01/XVMeb061e1c-1d31-11e8-b636-4cb4c2a09bff.jpg" width="122" height="79" alt="Au Tchad, Larcher rend visite aux soldats de l'opération Barkhane"/>
                                        Au Tchad, Larcher rend visite aux soldats de l'opération Barkhane
                </a>
            </li>
                    <li class="fig-tags__article">
                <a href="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00136-municipales-muselier-ouvre-la-porte-a-une-alliance-avec-lrem-a-marseille.php" >
                                        Municipales : Muselier ouvre la porte à une alliance avec LREM à Marseille
                </a>
            </li>
                    <li class="fig-tags__article">
                <a href="http://www.lefigaro.fr/politique/le-scan/2018/02/28/25001-20180228ARTFIG00327-apres-les-polemiques-wauquiez-et-calmels-se-retrouvent-furtivement-au-salon-de-l-agriculture.php" >
                                        Après les polémiques, les retrouvailles furtives de Wauquiez et Calmels
                </a>
            </li>
                    <li class="fig-tags__article">
                <a href="http://www.lefigaro.fr/politique/le-scan/2018/02/28/25001-20180228ARTFIG00167-le-gouvernement-prevoit-l-ajout-d-un-article-specifique-sur-la-corse-dans-la-constitution.php" >
                                        Le gouvernement prévoit l'ajout d'un article spécifique sur la Corse dans la Constitution
                </a>
            </li>
                    <li class="fig-tags__article">
                <a href="http://www.lefigaro.fr/politique/le-scan/2018/02/28/25001-20180228ARTFIG00156-visite-surprise-de-nicolas-hulot-au-salon-de-l-agriculture.php" >
                                        Visite surprise de Nicolas Hulot au Salon de l'agriculture
                </a>
            </li>
            </ul>
    </div>

    <div class="fig-tags__articles-footer">
        <a class="fig-tags__plus-actu fig-secondary-background" href="http://www.lefigaro.fr/politique/le-scan">Plus d'actualités Le Scan</a>
    </div>
</div>            </div>
            
            <div class="fig-premium-block" data-fgtcs-inview='{"customCategorie" :"conversion","customAction":"Affichage_Paywall_bloc_abo_commentaires","customLabel":"20180301ARTFIG00158_marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech","event":"customEventSPE"}'>
        <img class="fig-premium-block__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYgAAABWCAYAAABl2XJPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NjcyOSwgMjAxMi8wNS8wMy0xMzo0MDowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIEVsZW1lbnRzIDEyLjAgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0OUVBRkJBNTc4NDkxMUU3OTUwNEExNzVDNjA1NkU5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0OUVBRkJBNjc4NDkxMUU3OTUwNEExNzVDNjA1NkU5MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5RUFGQkEzNzg0OTExRTc5NTA0QTE3NUM2MDU2RTkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ5RUFGQkE0Nzg0OTExRTc5NTA0QTE3NUM2MDU2RTkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VPYrGQAAI31JREFU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" alt="Le Figaro Premium" />

    <p class="fig-premium-block__text fig-premium-block__text--bold">Abonnez-vous pour 1€ seulement</p>
    <form id="fig-premium-mail" class="fig-premium-mail" action="https://boutique.lefigaro.fr/abonnements/premium/1e99c" method="POST"  data-fgtcs-submit='{"customCategorie" :"conversion","customAction":"Subscribe_Paywall_bloc_abo_commentaires","customLabel":"20180301ARTFIG00158_marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech","event":"customEventSPE"}'>
        <label for="mail" class="a11y-hidden">Saisissez votre email</label>
        <input type="email" name="mail" id="mail" placeholder="Saisissez votre email" required />
        <input type="hidden" name="ID" value="7YUWjGTWnPBD9BVLxsMgb2QZ%2BKH1tDO2uwKS1FBZkhqHZ9jYiSmLl0e7dL3sTi5YSEhOM0v5MCzd70" />
        <input type="hidden" name="article" value="marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech" />
        <input type="hidden" name="verticale" value="http://www.lefigaro.fr/politique/le-scan" />
        <input type="hidden" name="page_origin" value="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" />
        <input type="hidden" name="origine" value="VWP17006" />
        <input type="hidden" name="ga_source" value="bandeau_article_ouvert" />
        <input type="submit" value="J&#039;en profite">
    </form>
    <p class="fig-premium-block__text">Annulable à tout moment</p>
</div>


            
<div class="fig-community-actions" data-component="fig-community-actions" id="reagir">

        
                    <div class="fig-reagir__pub">
    <div class="fig-pub fig-pub--legend fig-pub--hidden">
        <div class=" "
    data-figtag="pave_btf"
     data-fidji-id="" data-fidji-source="">
</div>
    </div>
</div>    
    <div class="fig-comments__container" data-component="fig-comments-container">
                                                <section class="fig-reagir">
    <p class="fig-reagir__title">Réagir à cet article</p>
    <div class="fig-reagir__block"><div class="fpAuth" data-type="comment-form" data-nodenid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php"></div></div>
</section>        
                
                    <section class="fig-comments">
                    <span class="fig-comments__title">
            <span class="fig-comments__count">851</span> commentaires        </span>
    
            <ul class="fig-comments__list js-fig-comments__list--root" aria-live="polite" aria-busy="false">
                                            <li class="fig-comment 42896538">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/artemidore-0" class="fig-comment__avatar" title="Avatar de artemidore">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-06.jpg" alt="Avatar" title="Avatar de artemidore" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/artemidore-0" title="La page de artemidore" class="fig-comment__user">artemidore</a>
        <div class="fig-comment__msg">
            <p>Beaucoup trop de paranoïaques sur ce forum</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:24</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896538/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896538" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896538" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896461">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/michel-666-sardouille-0" class="fig-comment__avatar" title="Avatar de Grille-Pain">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-3241981-61fpme7y.jpg" alt="Avatar" title="Avatar de Grille-Pain" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/michel-666-sardouille-0" title="La page de Grille-Pain" class="fig-comment__user">Grille-Pain</a>
        <div class="fig-comment__msg">
            <p>Bien fait :D<br />
Et ça se dit &quot;avocate&quot; (merci les amis de papa surtout) ?<br />
encore une preuve qu&#039;elle n&#039;a pas le niveau intellectuel ni culturel pour des fonctions publiques...</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:22</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896461/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896461" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896461" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896433">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/slavkov-joseph" class="fig-comment__avatar" title="Avatar de Mecki Joseph">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-274970.jpg" alt="Avatar" title="Avatar de Mecki Joseph" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/slavkov-joseph" title="La page de Mecki Joseph" class="fig-comment__user">Mecki Joseph</a>
        <div class="fig-comment__msg">
            <p>... et pendant ce temps jawad - le logeur de terroristes s&#039;amuse et provoque avec les publications sur les réseaux sociaux ...</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:21</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896433/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896433" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896433" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896383">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/tribordamure" class="fig-comment__avatar" title="Avatar de Tribord amure">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-2432661-5gjn4co.jpg" alt="Avatar" title="Avatar de Tribord amure" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/tribordamure" title="La page de Tribord amure" class="fig-comment__user">Tribord amure</a>
        <div class="fig-comment__msg">
            <p>La pendaison de Saddam Hussein<br />
ce n&#039;était pas un dessin animé  !!!<br />
.<br />
Diffusée en boucle sur les chaines d&#039;info<br />
le 1 er Janvier 2007.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:19</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896383/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896383" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896383" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896369">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/dubitatifff-0" class="fig-comment__avatar" title="Avatar de Dubitatifff">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-17.jpg" alt="Avatar" title="Avatar de Dubitatifff" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/dubitatifff-0" title="La page de Dubitatifff" class="fig-comment__user">Dubitatifff</a>
        <div class="fig-comment__msg">
            <p>Ces images   violentes  .. qui a effectué ces actes d&#039;une telle cruauté ;  de barbarie ?<br />
Peut être un Daech de chez nous ? qu&#039; en sait-on ?<br />
Peut être demain renvoyé , reviendra t-il chez nous ?<br />
quelle appréciation ; les dénoncer est-ce une faute grave ?</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:19</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896369/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896369" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896369" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896357">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/maisbonsang" class="fig-comment__avatar" title="Avatar de mais bon sang">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-11.jpg" alt="Avatar" title="Avatar de mais bon sang" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/maisbonsang" title="La page de mais bon sang" class="fig-comment__user">mais bon sang</a>
        <div class="fig-comment__msg">
            <p>pauvre France ! liberticide si on dénonce les vérités !</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:18</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896357/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896357" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896357" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896340">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/papillon181024-296196" class="fig-comment__avatar" title="Avatar de Papillon181024">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/images/296196.jpg" alt="Avatar" title="Avatar de Papillon181024" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/papillon181024-296196" title="La page de Papillon181024" class="fig-comment__user">Papillon181024</a>
        <div class="fig-comment__msg">
            <p>Il faut que Marine Lepen explique comment et en quoi  diffuser des images d&#039; exécutions de Daech constitue&quot; un combat contre le terrorisme&quot;.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:17</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896340/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896340" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896340" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896332">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/milenn-0" class="fig-comment__avatar" title="Avatar de Milenn">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-38.jpg" alt="Avatar" title="Avatar de Milenn" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/milenn-0" title="La page de Milenn" class="fig-comment__user">Milenn</a>
        <div class="fig-comment__msg">
            <p>La justice française ne prendrait pas parti pris pour tout simplement la diminuer politiquement ?</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:17</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896332/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896332" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896332" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896326">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/gadget" class="fig-comment__avatar" title="Avatar de gadget">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-02.jpg" alt="Avatar" title="Avatar de gadget" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/gadget" title="La page de gadget" class="fig-comment__user">gadget</a>
        <div class="fig-comment__msg">
            <p>Elle combattait le terrorisme en diffusant ces photos ?<br />
.<br />
Je ne crois pas, non.<br />
Elle essayait seulement de justifier les propos intolérables qu&#039;elle avait tenus, en montrant des photos plus intolérables encore. Mais en aucun cas, elle ne &quot;combattait&quot; Daesh en postant ces photos.<br />
.<br />
Marine Le Pen n&#039;est déjà pas capable de &quot;combattre&quot; un vieillard borgne, sénile et quasiment impotent, ... alors Daesh, hein !?</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:17</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896326/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896326" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896326" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896259">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/michele-megard" class="fig-comment__avatar" title="Avatar de MARIE EGLANTINE">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/images/nophoto.jpg" alt="Avatar" title="Avatar de MARIE EGLANTINE" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/michele-megard" title="La page de MARIE EGLANTINE" class="fig-comment__user">MARIE EGLANTINE</a>
        <div class="fig-comment__msg">
            <p>la mauvaise foi de certains juges avec  lunettes rose et autruche ! voir le constat de cette politique depuis 40 ans !</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:15</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896259/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896259" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896259" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896257">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/jazzprog-0" class="fig-comment__avatar" title="Avatar de jazzprog">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-01.jpg" alt="Avatar" title="Avatar de jazzprog" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/jazzprog-0" title="La page de jazzprog" class="fig-comment__user">jazzprog</a>
        <div class="fig-comment__msg">
            <p>En fait c&#039;est l&#039;avis des familles des victimes qui serait intéressant, pas celui des juges inféodés et de la presse complaisante.<br />
Et dire que pendant ce temps là, Jawad Bendaoud doit bien  se marrer !...</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:15</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896257/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896257" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896257" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896253">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/alain-kerusel" class="fig-comment__avatar" title="Avatar de yellowstone">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/images/nophoto.jpg" alt="Avatar" title="Avatar de yellowstone" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/alain-kerusel" title="La page de yellowstone" class="fig-comment__user">yellowstone</a>
        <div class="fig-comment__msg">
            <p>« diffusion d’images violentes », un délit passible de trois ans d’emprisonnement et 75 000 euros d’amende ... la loi c&#039;est pour tout le monde . y compris pour Marion Anne Perrine Le Pen, dite Marine Le Pen Châtelaine de Montretout</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:15</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896253/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896253" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896253" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896250">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/yakfkon-0" class="fig-comment__avatar" title="Avatar de yakfkon">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-01.jpg" alt="Avatar" title="Avatar de yakfkon" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/yakfkon-0" title="La page de yakfkon" class="fig-comment__user">yakfkon</a>
        <div class="fig-comment__msg">
            <p>C’est vraiment triste de voir ou en est la justice .</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:14</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896250/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896250" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896250" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896249">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/homme-des-voeux-de-bartissol-0" class="fig-comment__avatar" title="Avatar de BABA COOL...">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-3035614-61mzowvl.jpg" alt="Avatar" title="Avatar de BABA COOL..." width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/homme-des-voeux-de-bartissol-0" title="La page de BABA COOL..." class="fig-comment__user">BABA COOL...</a>
        <div class="fig-comment__msg">
            <p>je ne suis pas fan de cette dame ,mais cette décision prise par les juges de Nanterre est à se rouler par terre....(juste pour les rimes )<br />
&quot;cachez ces images que nous ne voulons voir &quot; ah les tartuffes !</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:14</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896249/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896249" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896249" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896245">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/jeanne-graziani" class="fig-comment__avatar" title="Avatar de Une des jeanne">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-31.jpg" alt="Avatar" title="Avatar de Une des jeanne" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/jeanne-graziani" title="La page de Une des jeanne" class="fig-comment__user">Une des jeanne</a>
        <div class="fig-comment__msg">
            <p>Je ne vote pas FN et je porte peu de crédits aux propos de MLP, mais là, je suis consternée et très en colère de cette attaque bassement politique dont elle fait l&#039;objet pour avoir diffusé des images qui devraient interpeler tout le monde! Nous sommes à la veille de laisser rentrer en France des individus connus pour leurs crimes contre notre pays, et je me pose la question de savoir si c&#039;est la même justice qui va traiter leurs cas!</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:14</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896245/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896245" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896245" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896243">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/ayon3-0" class="fig-comment__avatar" title="Avatar de ayon3">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-14.jpg" alt="Avatar" title="Avatar de ayon3" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/ayon3-0" title="La page de ayon3" class="fig-comment__user">ayon3</a>
        <div class="fig-comment__msg">
            <p>marine égale à elle-même. Elle diffuse des images de propagande de l&#039;EI.<br />
.<br />
Il faudrait ajouter la charge liée à une entreprise terroriste. Au minimum, il faudrait la ficher S.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:14</span>
            <div class="fig-comment__tools">
                                                        <a href="#" class="fig-comment__show js-nested-comments" id="btn-42896243"
                       aria-expanded="false" aria-controls="comment-list-42896243">
                <span class="btn-show-cmt-txt">
                    <span class="js-nested-comments__label">Lire</span>
                    la                    <span class="fig-comment__show-count"> réponse</span>
                    à ce commentaire
                </span>
                        <span class="fig-icon-caret-down"></span>
                    </a>
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896243/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896243" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896243" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                        <ul class="fig-comments__list fig-comments__list--child fig-comments__list--hide"
                        id="comment-list-42896243" aria-hidden="true">
                                                    <li class="fig-comment 42896542">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/gadget" class="fig-comment__avatar" title="Avatar de gadget">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-02.jpg" alt="Avatar" title="Avatar de gadget" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/gadget" title="La page de gadget" class="fig-comment__user">gadget</a>
        <div class="fig-comment__msg">
            <p>En tant que responsable d&#039;un parti d&#039;extrême-droite, Mme Le Pen est bien entendu *déjà* fichée S.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:25</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896542/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896542" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896542" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
            
                    </ul>
                            </li>
                    <li class="fig-comment 42896214">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/alain-kerjean-0" class="fig-comment__avatar fig-comment__avatar--subscriber" title="Avatar de Lego Z">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-06.jpg" alt="Avatar" title="Avatar de Lego Z" width="50" height="50">
        </a>
        <span class="fig-comment__subscriber">Abonné</span>    </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/alain-kerjean-0" title="La page de Lego Z" class="fig-comment__user">Lego Z</a>
        <div class="fig-comment__msg">
            <p>750 commentaires ! Allez un effort que diable ! Dans ce tapis de bombes ou le bon gout et les capacités de jugement se confrontent et se confortent à l&#039;absence de maitrise de l&#039;orthographe.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:13</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896214/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896214" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896214" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896202">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/grandpa" class="fig-comment__avatar" title="Avatar de Jean-Emarre">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-2776942-5mvjsbj.jpg" alt="Avatar" title="Avatar de Jean-Emarre" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/grandpa" title="La page de Jean-Emarre" class="fig-comment__user">Jean-Emarre</a>
        <div class="fig-comment__msg">
            <p>Je me souviens avoir vu sur certains journaux de presse écrite, et même à la télé des images de terroristes de Daesch avec couteaux et sabres à la main et des otages à genoux devant eux.....ce n&#039;était guère mieux...</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:13</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896202/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896202" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896202" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896130">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/politiquement-incorrecte-0" class="fig-comment__avatar" title="Avatar de Politiquement incorrecte">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-43.jpg" alt="Avatar" title="Avatar de Politiquement incorrecte" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/politiquement-incorrecte-0" title="La page de Politiquement incorrecte" class="fig-comment__user">Politiquement incorrecte</a>
        <div class="fig-comment__msg">
            <p>Du grand n&#039;importe quoi ! Offensive tous azimuts contre les opposants politiques. Avec les textes en préparation contre les soi disant fake news. Ceux qui ont tellement joué médiatiquement la carte de certains candidats devraient se méfier, s&#039;ils ne sont pas ou plus dans la ligne.<br />
Si je donne des références historiques passées ou présentes... La pente actuellement suivie me paraît extrêmement dangereuse pour les libertés publiques. Espérons que je ne constaterai encore une fois que...<br />
Pour finir, et pour être parfaitement claire, je ne suis pas supportrice de MLP et mon commentaire aurait été le même s&#039;il s&#039;était agi d&#039;une autre personne d&#039;un autre bord politique.</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:10</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896130/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896130" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896130" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
                    <li class="fig-comment 42896114">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/jean-robert-vachon" class="fig-comment__avatar" title="Avatar de M I A">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/pictures/picture-473001-5m5isjt.jpg" alt="Avatar" title="Avatar de M I A" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/jean-robert-vachon" title="La page de M I A" class="fig-comment__user">M I A</a>
        <div class="fig-comment__msg">
            <p>LA JUSTICE FAIT DU BON BOULOT</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:10</span>
            <div class="fig-comment__tools">
                                                        <a href="#" class="fig-comment__show js-nested-comments" id="btn-42896114"
                       aria-expanded="false" aria-controls="comment-list-42896114">
                <span class="btn-show-cmt-txt">
                    <span class="js-nested-comments__label">Lire</span>
                    la                    <span class="fig-comment__show-count"> réponse</span>
                    à ce commentaire
                </span>
                        <span class="fig-icon-caret-down"></span>
                    </a>
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896114/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896114" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896114" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                        <ul class="fig-comments__list fig-comments__list--child fig-comments__list--hide"
                        id="comment-list-42896114" aria-hidden="true">
                                                    <li class="fig-comment 42896550">
                    <div class="fig-comment__avatar-wrapper">
        <a href="http://plus.lefigaro.fr/page/pokerman58-0" class="fig-comment__avatar" title="Avatar de pokerman58">
            <img src="http://plus.lefigaro.fr/sites/default/files/imagecache/Petite/avatar_selection/avatar-06.jpg" alt="Avatar" title="Avatar de pokerman58" width="50" height="50">
        </a>
            </div>
    <div class="fig-comment__content">
                <a href="http://plus.lefigaro.fr/page/pokerman58-0" title="La page de pokerman58" class="fig-comment__user">pokerman58</a>
        <div class="fig-comment__msg">
            <p>avec ta tête aussi</p>

        </div>
        <div class="fig-comment__footer">
            <span class="fig-comment__timestamp">Le 01/03/2018 à 16:25</span>
            <div class="fig-comment__tools">
                
                                        <a href="http://plus.lefigaro.fr/figaro_workflow/comment/42896550/alerter" class="fig-comment__alerter">Alerter<span class="fig-icon-warning"></span></a>
                <span class="fig-comment__reply"><a href="http://plus.lefigaro.fr/comments_reply/42896550" class="fpAuth" data-action="fpAuth.buildAnswerCommentForm" data-actionpremium="true" data-cid="42896550" data-nid="20180301ARTFIG00158" data-url="http://www.lefigaro.fr/politique/le-scan/2018/03/01/25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" data-type="action" rel="nofollow" data-public="1" data-update="0" data-formlevel="middle">Répondre</a></span>
                        </div>
        </div>
    </div>
                                </li>
            
                    </ul>
                            </li>
            
            </ul>
        </section>
    
    </div>

        <div data-comments-sticky-limit></div>

                <div class="fig-comments__more-container">
            <button class="fig-comments__more fig-comments__more--active js-more-comments">Afficher plus de commentaires</button>
        </div>
    </div>    
        
</div>
    </div>
</div>

        <div class="fig-partners" data-component="fig-carousel" data-carousel-multi-items="true">
    <div class="fig-partners__wrapper">
        <span class="fig-partners__arrow fig-partners__arrow--disabled fig-partners__arrow--left fig-icon-chevron-left"></span>
        <div class="fig-partners__carousel">
            <ul class="fig-partners__container">
                            <li class="fig-partners__item fig-partners__item--0">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="https://www.epresse.fr/kiosque" title="Le meilleur de la presse quotidienne et magazine" aria-label="Le meilleur de la presse quotidienne et magazine">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/epresse.jpg" alt="Le meilleur de la presse quotidienne et magazine" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Le meilleur de la presse quotidienne et magazine</p>
                            <span class="fig-partners__button">S&#039;inscrire</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--1">
                    <a class="fig-partners__link" target="self" href="http://www.lefigaro.fr/jeuxetinvitations/?xtatc=INT-68" title="Testez vos connaissances ! Des cadeaux à gagner" aria-label="Testez vos connaissances ! Des cadeaux à gagner">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/JeuxConcours.jpg" alt="Testez vos connaissances ! Des cadeaux à gagner" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Testez vos connaissances ! Des cadeaux à gagner</p>
                            <span class="fig-partners__button">Jouer</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--2">
                    <a class="fig-partners__link" target="self" href="http://apps.lefigaro.fr/" title="Toutes les applications mobiles du Figaro" aria-label="Toutes les applications mobiles du Figaro">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/ApplisMobiles.jpg" alt="Toutes les applications mobiles du Figaro" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Toutes les applications mobiles du Figaro</p>
                            <span class="fig-partners__button">Télécharger</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--3">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="https://www.facebook.com/lefigaro" title="Suivez Le Figaro sur Facebook" aria-label="Suivez Le Figaro sur Facebook">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Facebook.jpg" alt="Suivez Le Figaro sur Facebook" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Suivez Le Figaro sur Facebook</p>
                            <span class="fig-partners__button">Découvrir</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--4">
                    <a class="fig-partners__link" target="self" href="http://madame.lefigaro.fr/recettes" title="Plus de 7 000 recettes de cuisine à décrouvrir" aria-label="Plus de 7 000 recettes de cuisine à décrouvrir">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Recettesmadame.jpg" alt="Plus de 7 000 recettes de cuisine à décrouvrir" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Plus de 7 000 recettes de cuisine à décrouvrir</p>
                            <span class="fig-partners__button">Rechercher</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--5">
                    <a class="fig-partners__link" target="self" href="http://lefigaro.explorimmo.com/resultat/annonces.html?transaction=vente&amp;mode=vente&amp;location=France%2C+&amp;proximity=0&amp;areaMin=10&amp;areaMax=&amp;roomMin=&amp;roomMax=&amp;bedroomMin=&amp;bedroomMax=&amp;oldness=&amp;priceMin=100000&amp;priceMax=1000000&amp;photoOnly=true&amp;_photoOnly=on" title="Plus de 500 000 annonces immobilières" aria-label="Plus de 500 000 annonces immobilières">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Immo.jpg" alt="Plus de 500 000 annonces immobilières" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Plus de 500 000 annonces immobilières</p>
                            <span class="fig-partners__button">Rechercher</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--6">
                    <a class="fig-partners__link" target="self" href="http://kiosque.lefigaro.fr/" title="Le Figaro dès 22h sur votre ordinateur" aria-label="Le Figaro dès 22h sur votre ordinateur">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Kiosque.jpg" alt="Le Figaro dès 22h sur votre ordinateur" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Le Figaro dès 22h sur votre ordinateur</p>
                            <span class="fig-partners__button">Lire</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--7">
                    <a class="fig-partners__link" target="self" href="http://boutique.lefigaro.fr/" title="La boutique en ligne du Figaro" aria-label="La boutique en ligne du Figaro">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/FigaroStore.jpg" alt="La boutique en ligne du Figaro" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">La boutique en ligne du Figaro</p>
                            <span class="fig-partners__button">Découvrir</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--8">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="http://www.ticketac.com/?utm_source=LeFigaro&amp;utm_medium=footerservice&amp;utm_campaign=MarketFigaro" title="Jusqu&#039;à 80% de réduction sur les spectacles" aria-label="Jusqu&#039;à 80% de réduction sur les spectacles">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Ticketac.jpg" alt="Jusqu&#039;à 80% de réduction sur les spectacles" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Jusqu&#039;à 80% de réduction sur les spectacles</p>
                            <span class="fig-partners__button">Réserver</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--9">
                    <a class="fig-partners__link" target="self" href="http://logc111.xiti.com/go.ad?xts=411548&amp;atc=PUB-[cadremploi_bloc_bas_de_page_article]&amp;type=AT&amp;url=http://lefigaro.cadremploi.fr/emploi/liste_offres?reg=1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23&amp;xtor=AD-642-[figaro]" title="Votre nouveau job parmi 10 000 offres d&#039;emploi" aria-label="Votre nouveau job parmi 10 000 offres d&#039;emploi">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Emploi.jpg" alt="Votre nouveau job parmi 10 000 offres d&#039;emploi" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Votre nouveau job parmi 10 000 offres d&#039;emploi</p>
                            <span class="fig-partners__button">Rechercher</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--10">
                    <a class="fig-partners__link" target="self" href="http://carnetdujour.lefigaro.fr/" title="Passez votre annonce dans le Carnet du Figaro" aria-label="Passez votre annonce dans le Carnet du Figaro">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Carnetdujour.jpg" alt="Passez votre annonce dans le Carnet du Figaro" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Passez votre annonce dans le Carnet du Figaro</p>
                            <span class="fig-partners__button">Découvrir</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--11">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="https://go.babbel.com/c117_300x140_ctn/default" title="10 astuces pour apprendre n&#039;importe quelle langue facilement" aria-label="10 astuces pour apprendre n&#039;importe quelle langue facilement">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Babbel.jpg" alt="10 astuces pour apprendre n&#039;importe quelle langue facilement" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">10 astuces pour apprendre n&#039;importe quelle langue facilement</p>
                            <span class="fig-partners__button">Découvrir</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--12">
                    <a class="fig-partners__link" target="self" href=" http://plus.lefigaro.fr/abonnement/digital/presentation#xtor=AD-1-[Generique]-[footer]-[]-[DIGITAL]-[footer_generique]" title="L&#039;intégrale du Figaro sur tous vos écrans" aria-label="L&#039;intégrale du Figaro sur tous vos écrans">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Aboweb.jpg" alt="L&#039;intégrale du Figaro sur tous vos écrans" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">L&#039;intégrale du Figaro sur tous vos écrans</p>
                            <span class="fig-partners__button">S&#039;abonner</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--13">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="https://twitter.com/Le_Figaro" title="L&#039;actu en temps réel avec Le Figaro" aria-label="L&#039;actu en temps réel avec Le Figaro">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Twitter.jpg" alt="L&#039;actu en temps réel avec Le Figaro" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">L&#039;actu en temps réel avec Le Figaro</p>
                            <span class="fig-partners__button">Suivre</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--14">
                    <a class="fig-partners__link" target="self" href=" http://plus.lefigaro.fr/newsletter" title="Plus de 15 newsletters thématiques" aria-label="Plus de 15 newsletters thématiques">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Newsletters.jpg" alt="Plus de 15 newsletters thématiques" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Plus de 15 newsletters thématiques</p>
                            <span class="fig-partners__button">S&#039;inscrire</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--15">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="http://cplussur.lefigaro.fr/action/Devis/formulaireSanteWidgetSFigaro#xtor=AD-359-[AS_FIG_widget]" title="Trouvez la meilleure assurance santé en 3 minutes" aria-label="Trouvez la meilleure assurance santé en 3 minutes">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Cplussur.jpg" alt="Trouvez la meilleure assurance santé en 3 minutes" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Trouvez la meilleure assurance santé en 3 minutes</p>
                            <span class="fig-partners__button">Comparer</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--16">
                    <a class="fig-partners__link" target="self" href="http://avis-vin.lefigaro.fr/offre-mois" title="Le vin du mois en exclusivité - prix direct propriété" aria-label="Le vin du mois en exclusivité - prix direct propriété">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Vin.jpg" alt="Le vin du mois en exclusivité - prix direct propriété" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Le vin du mois en exclusivité - prix direct propriété</p>
                            <span class="fig-partners__button">Découvrir</span>
                        </div>
                    </a>
                </li>
                            <li class="fig-partners__item fig-partners__item--17">
                    <a class="fig-partners__link" target="blank" rel="noopener" href="http://france.lachainemeteo.com/meteo-france/previsions-meteo-france-0.php" title="Suivez l&#039;évolution de vos conditions météo" aria-label="Suivez l&#039;évolution de vos conditions météo">
                        <img src="http://a.f1g.fr/assets-img/footer-carrousel/Lachainemeteo.jpg" alt="Suivez l&#039;évolution de vos conditions météo" aria-hidden="true" />
                        <div class="fig-partners__caption">
                            <p class="fig-partners__label">Suivez l&#039;évolution de vos conditions météo</p>
                            <span class="fig-partners__button">En savoir +</span>
                        </div>
                    </a>
                </li>
                        </ul>
        </div>
        <span class="fig-partners__arrow fig-partners__arrow--right fig-icon-chevron-right"></span>
    </div>
</div>


                    <div class=" "
    data-figtag="intrusif"
     data-fidji-id="" data-fidji-source="">
</div>        
                                    <script src="https://cdn.adsafeprotected.com/iasPET.1.js"></script>
<script src="//acdn.adnxs.com/ast/ast.js"></script>
<script src="//a.f1g.fr/assets-sl/fgds/fgds.js"></script>
<script>
  figads.ready(function() {
    figads.init({
      pageId: 'lefigaro_actualite-politique-articles',
      keywords: {"mots-cles":["Marine Le Pen","Gilbert Collard"],"rubrique":"Le Scan","artid":"20180301ARTFIG00158","auteur":"Charles Sapin","page-payant":0,"type":"article","titre":"Marine Le Pen mise en examen pour des tweets diffusant des ex\u00e9cutions de Daech"},
      enableSafeFrame: false
    });
    figads.load();
  });

</script>

<script>
  var adOpts = {
    memberId: 3273,
    pageId: 'lefigaro_actualite-politique-articles',
    keywords: {"mots-cles":["Marine Le Pen","Gilbert Collard"],"rubrique":"Le Scan","artid":"20180301ARTFIG00158","auteur":"Charles Sapin","page-payant":0,"type":"article","titre":"Marine Le Pen mise en examen pour des tweets diffusant des ex\u00e9cutions de Daech"},
    enableSafeFrame: false
  };
</script>
<script src="//a.f1g.fr/build/onfocus-tag.js"></script>
                    

                            <footer id="fig-footer" class="figh figh-footer">
    <ul class="figh-footer__list">
                <li class="figh-footer__item"  data-id="24476">
            <a class="figh-footer__link"
               href="http://www.lefigaro.fr/plusdefigaro/"
                title="Plan du site (nouvelle fen&ecirc;tre)" aria-label="Plan du site (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Plan du site</a>
        </li>
                <li class="figh-footer__item"  data-id="24477">
            <a class="figh-footer__link"
               href="http://mentions-legales.lefigaro.fr/page/charte-de-participation"
                title="Charte (nouvelle fen&ecirc;tre)" aria-label="Charte (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Charte</a>
        </li>
                <li class="figh-footer__item"  data-id="24478">
            <a class="figh-footer__link"
               href="http://mentions-legales.lefigaro.fr/page/cgu"
                title="CGU (nouvelle fen&ecirc;tre)" aria-label="CGU (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">CGU</a>
        </li>
                <li class="figh-footer__item"  data-id="24479">
            <a class="figh-footer__link"
               href="http://boutique.lefigaro.fr/cgv"
                title="CGV (nouvelle fen&ecirc;tre)" aria-label="CGV (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">CGV</a>
        </li>
                <li class="figh-footer__item"  data-id="24480">
            <a class="figh-footer__link"
               href="http://mentions-legales.lefigaro.fr/page/infos-cookies"
                title="Infos cookies (nouvelle fen&ecirc;tre)" aria-label="Infos cookies (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Infos cookies</a>
        </li>
                <li class="figh-footer__item"  data-id="24481">
            <a class="figh-footer__link"
               href="http://plus.lefigaro.fr/aide"
                title="FAQ (nouvelle fen&ecirc;tre)" aria-label="FAQ (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">FAQ</a>
        </li>
                <li class="figh-footer__item"  data-id="24482">
            <a class="figh-footer__link"
               href="http://www.lefigaro.fr/contact/contact.php"
                title="Contact (nouvelle fen&ecirc;tre)" aria-label="Contact (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Contact</a>
        </li>
                <li class="figh-footer__item"  data-id="24483">
            <a class="figh-footer__link"
               href="http://boutique.lefigaro.fr/rayon/4-abonnement?ga_source=footer_figaro"
                title="Abonnements (nouvelle fen&ecirc;tre)" aria-label="Abonnements (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Abonnements</a>
        </li>
                <li class="figh-footer__item"  data-id="24484">
            <a class="figh-footer__link"
               href="http://www.lefigaro.fr/services/"
                title="Services (nouvelle fen&ecirc;tre)" aria-label="Services (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Services</a>
        </li>
                <li class="figh-footer__item"  data-id="24485">
            <a class="figh-footer__link"
               href="http://mentions-legales.lefigaro.fr/page/mentions-legales"
                title="Mentions l&eacute;gales (nouvelle fen&ecirc;tre)" aria-label="Mentions l&eacute;gales (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Mentions l&eacute;gales</a>
        </li>
                <li class="figh-footer__item"  data-id="24486">
            <a class="figh-footer__link"
               href="http://www.figaromedias.fr/"
                title="Publicit&eacute; (nouvelle fen&ecirc;tre)" aria-label="Publicit&eacute; (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Publicit&eacute;</a>
        </li>
                <li class="figh-footer__item"  data-id="24487">
            <a class="figh-footer__link"
               href="http://articles.lefigaro.fr/"
                title="Sitemap (nouvelle fen&ecirc;tre)" aria-label="Sitemap (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">Sitemap</a>
        </li>
                <li class="figh-footer__item"  data-id="24488">
            <a class="figh-footer__link"
               href="https://www.lefigaro.fr/elections/resultats/"
                title="R&eacute;sultats &eacute;lections (nouvelle fen&ecirc;tre)" aria-label="R&eacute;sultats &eacute;lections (nouvelle fen&ecirc;tre)" target="_blank" rel="noopener">R&eacute;sultats &eacute;lections</a>
        </li>
            </ul>
</footer>
        
                        <script async src="http://a.f1g.fr/f/js/widgets.js?v20180301084433"></script>

                        <script defer src="https://a.f1g.fr/fea/js/widgets.js?v1.0.3"></script>
        
    <script src="http://a.f1g.fr/f/js/content.js?v20180301084433"></script>
    
                                
                        
                                        <script type='text/javascript'>
  var _sf_async_config = _sf_async_config || {};
  _sf_async_config.uid = "43900";
  _sf_async_config.domain = "lefigaro.fr";
  _sf_async_config.useCanonical = true;
  _sf_async_config.sections = "";
  _sf_async_config.authors = "";
  (function(){
    function loadChartbeat() {
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
      document.body.appendChild(e);
    }
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
      loadChartbeat : function() { oldonload(); loadChartbeat(); };
  })();
</script>
                    
                                    <iframe style="height: 1px; width: 1px; border: 0px none; position: absolute; display: none; left: 0px; top: 0px; z-index: 0;" src="//cstatic.weborama.fr/iframe/customers/premium.html?idEditeur=1145&idSite=181"></iframe>

<script type="text/javascript" async="async" src="http://widgets.outbrain.com/outbrain.js"></script>

<img alt="" src="http://amplifypixel.outbrain.com/pixel?mid=00cfaacd3ce7d5bf46d5f6a20eb138626e" class="a11y-hidden" />

<img alt="" src="//trc.taboola.com/lefigaro-sc/log/3/mark?marking-type=untargeting&item-url=http://www.lefigaro.fr%2Fpolitique%2Fle-scan%2F2018%2F03%2F01%2F25001-20180301ARTFIG00158-marine-le-pen-mise-en-examen-pour-des-tweets-diffusant-des-executions-de-daech.php" class="a11y-hidden" />

<script>
(function(e,c,a,g,f){function d(){var b=c.createElement("script");b.async=!0;
b.src="//radar.cedexis.com/1/10036/radar.js";c.body.appendChild(b)}
(function(){for(var b=[/\bMSIE (5|6)/i],a=b.length;a--;)if(b[a]
.test(navigator.userAgent))return!1;return!0})()
&&("complete"!==c.readyState?(a=e[a])?a(f,d,!1):(a=e[g])&&a("on"+f,d):d())})
(window,document,"addEventListener","attachEvent","load");
</script>

<script>
    (function () {
        // 1. Loading the measurement system
        var aS = document.createElement('script');
        aS.type = 'text/javascript';
        aS.async = true;
        aS.src = 'https://tag.audience.acpm.fr/js/on-1.0.min.js';

        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(aS, s);

        // 2. Sending the measurement
        if (aS.addEventListener) {
            aS.addEventListener('load', function () {
                aSloaded();
            }, false)
        } else {
            aS.onreadystatechange = function () {
                if (aS.readyState in {complete: 1, loaded: 1}) {
                    aSloaded();
                }
            };
        }
        aSloaded = function () {
            var tag = new Acpm.Tag("247047216611");
            tag.send();
        };
    })();
</script>            </body>
</html>`,
`<!DOCTYPE html>
<html lang="fr" data-async-path="/"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://opengraphprotocol.org/schema/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:fp="http://plus.lefigaro.fr/fp/elements/1.0/" version="XHTML+RDFa 1.0">
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
    	test body
    </body></html>`,
    `   <div style="display: flex;">
      <svg id="yt-logo-svg" class="external-icon" viewBox="0 0 200 60">
        <g id="yt-logo" viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
          <g>
            <path fill="#FF0000" d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
              c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
              C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
              S64.31,19.77,63,14.87z"/>
            <polygon fill="#FFFFFF" points="26.6,39.43 42.93,30 26.6,20.57"/>
          </g>
          <g>
            <g id="youtube-paths">
              <path fill="#282828" d="M92.69,48.03c-1.24-0.84-2.13-2.14-2.65-3.91c-0.52-1.77-0.79-4.12-0.79-7.06v-4
                c0-2.97,0.3-5.35,0.9-7.15c0.6-1.8,1.54-3.11,2.81-3.93c1.27-0.82,2.94-1.24,5.01-1.24c2.04,0,3.67,0.42,4.9,1.26
                c1.23,0.84,2.13,2.15,2.7,3.93c0.57,1.78,0.85,4.16,0.85,7.12v4c0,2.94-0.28,5.3-0.83,7.08c-0.55,1.78-1.45,3.09-2.7,3.91
                c-1.24,0.82-2.93,1.24-5.06,1.24C95.65,49.29,93.93,48.87,92.69,48.03z M99.66,43.71c0.34-0.9,0.52-2.37,0.52-4.4v-8.59
                c0-1.98-0.17-3.42-0.52-4.34c-0.34-0.91-0.95-1.37-1.82-1.37c-0.84,0-1.43,0.46-1.78,1.37c-0.34,0.91-0.52,2.36-0.52,4.34v8.59
                c0,2.04,0.16,3.51,0.49,4.4c0.33,0.9,0.93,1.35,1.8,1.35C98.71,45.06,99.31,44.61,99.66,43.71z"/>
              <path fill="#282828" d="M188.16,37.13v1.39c0,1.77,0.05,3.09,0.16,3.98c0.1,0.88,0.32,1.53,0.65,1.93
                c0.33,0.4,0.84,0.61,1.53,0.61c0.93,0,1.57-0.36,1.91-1.08c0.34-0.72,0.53-1.92,0.56-3.6l5.35,0.31
                c0.03,0.24,0.04,0.57,0.04,0.99c0,2.55-0.7,4.45-2.09,5.71c-1.39,1.26-3.36,1.89-5.91,1.89c-3.06,0-5.2-0.96-6.43-2.88
                c-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14,0.64-7.15,1.91-9.06c1.27-1.9,3.45-2.85,6.54-2.85c2.13,0,3.76,0.39,4.9,1.17
                c1.14,0.78,1.94,1.99,2.41,3.64c0.46,1.65,0.7,3.93,0.7,6.83v4.72H188.16z M188.95,25.53c-0.31,0.39-0.52,1.03-0.63,1.91
                c-0.11,0.88-0.16,2.23-0.16,4.02v1.98h4.54v-1.98c0-1.77-0.06-3.11-0.18-4.02c-0.12-0.91-0.34-1.56-0.65-1.93
                c-0.31-0.37-0.8-0.56-1.46-0.56C189.75,24.94,189.26,25.14,188.95,25.53z"/>
              <path fill="#282828" d="M77.59,36.61l-7.06-25.49h6.16l2.47,11.55c0.63,2.85,1.09,5.27,1.39,7.28h0.18
                c0.21-1.44,0.67-3.85,1.39-7.24l2.56-11.6h6.16L83.7,36.61v12.23h-6.11V36.61z"/>
              <path fill="#282828" d="M126.45,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8
                c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79
                c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H126.45z"/>
              <path fill="#282828" d="M158.27,21.28v27.55h-4.85l-0.54-3.37h-0.13c-1.32,2.55-3.3,3.82-5.93,3.82c-1.83,0-3.18-0.6-4.05-1.8
                c-0.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0,1.23,0.13,2.11,0.4,2.63c0.27,0.52,0.72,0.79,1.35,0.79
                c0.54,0,1.06-0.16,1.55-0.49c0.49-0.33,0.86-0.75,1.1-1.26V21.28H158.27z"/>
              <path fill="#282828" d="M143.31,16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38V16.11z"/>
              <path fill="#282828" d="M178.8,25.69c-0.38-1.74-0.98-3-1.82-3.78c-0.84-0.78-1.99-1.17-3.46-1.17c-1.14,0-2.2,0.32-3.19,0.97
                c-0.99,0.64-1.75,1.49-2.29,2.54h-0.05l0-14.52h-5.98v39.11h5.12l0.63-2.61h0.13c0.48,0.93,1.2,1.66,2.16,2.2
                c0.96,0.54,2.02,0.81,3.19,0.81c2.1,0,3.64-0.97,4.63-2.9c0.99-1.93,1.48-4.95,1.48-9.06v-4.36
                C179.36,29.84,179.17,27.43,178.8,25.69z M173.11,36.93c0,2.01-0.08,3.58-0.25,4.72c-0.16,1.14-0.44,1.95-0.83,2.43
                c-0.39,0.48-0.91,0.72-1.57,0.72c-0.51,0-0.98-0.12-1.42-0.36c-0.43-0.24-0.79-0.6-1.06-1.08V27.71
                c0.21-0.75,0.57-1.36,1.08-1.84c0.51-0.48,1.06-0.72,1.66-0.72c0.63,0,1.12,0.25,1.46,0.74c0.34,0.49,0.58,1.33,0.72,2.49
                c0.13,1.17,0.2,2.83,0.2,4.99V36.93z"/>
            </g>
          </g>
        </g>
      </svg>
    </div>`,
    `hello <div>test</div> hi`
];

function test(ele){
	console.log('original ======================> ');
	console.log(ele);
	console.log('clean ======================> ');
	console.log(xss.clean(ele));
}

test(tests[12]);