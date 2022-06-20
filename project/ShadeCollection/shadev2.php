<?php
include_once('./function.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
    <link href="./shadev2.css" rel="stylesheet">
    <title>Shade Collection</title>
</head>
    <body>
        <nav>
            <div class="container">
                <div class="left-nav">
                    <img class="logo" src="./logo.png" alt="logo">
                    <div class="title">Shade Collection</div>
                </div>
                <input class="search-bar" type="text" placeholder="Chercher ...">
                <a class="fork-link" href="https://www.colorhunt.co/" target="_blank">ColorHunt Inspiration</a>
            </div>
        </nav>
        <hr class="line">
        <main class="container">
            <div class="left">
                <div>
                    <div selected="on" class="tab-choice"><i class="bi bi-star pe-2 icon-tab"></i>Nouveauté</div>
                    <div class="tab-choice"><i class="bi bi-balloon pe-2 icon-tab"></i>Populaire</div>
                    <div class="tab-choice"><i class="bi bi-box2 pe-2 icon-tab"></i>Aléatoire</div>
                    <div class="tab-choice"><i class="bi bi-bookmark-heart pe-2 icon-tab"></i>Collection</div>
                </div>
                <hr class="line">
                <div>
                <?php
                $tag = getAllTag();
                foreach ($tag as $key) {
                    echo '<div class="tag">'.$key['libelle'].'</div>';
                }
                ?>
                </div>  
            </div>
            <div class="right">
                <div class="feed">
                    <?php
                    $blend = getAllBlend();
                    foreach ($blend as $key) {
                        ?>
                        <div class="item">
                            <div class="top-card">
                                <button class="fav-button"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg></button>
                                
                            </div>
                            <div class="title-color">
                                <div class="color-hex">
                                    <?php echo $key['color1'] ?>
                                </div>
                                <div class="color-hex">
                                    <?php echo $key['color2'] ?>
                                </div>
                                <div class="color-hex">
                                    <?php echo $key['color3'] ?>
                                </div>
                                <div class="color-hex">
                                    <?php echo $key['color4'] ?>
                                </div>
                            </div>
                            <div class="color">
                                <div class="color-show" style="background-color: <?php echo $key['color1'] ?>;"></div>
                                <div class="color-show" style="background-color: <?php echo $key['color2'] ?>;"></div>
                                <div class="color-show" style="background-color: <?php echo $key['color3'] ?>;"></div>
                                <div class="color-show" style="background-color: <?php echo $key['color4'] ?>;"></div>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </main>
        <script src="./shade.js"></script>
    </body>
</html>