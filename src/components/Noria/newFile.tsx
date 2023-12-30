import { boxes } from './Noria.astro';

<Fragment>
<div class="container__noria">
<section class="noria">
<div class="noria__ejeCentral">
<img loading="lazy" class="noria__imgEje noria__imgEje" src="./assets/neron.png" alt="#" />
<img loading="lazy" class="noria__imgEje noria__imgEje--zIndex-1" src="./assets/toy-poodle.png" alt="#" />
</div>

<ul class="noria__containerBoxes">
{boxes.map(box => (
<Fragment><li class="noria__box">
<div class="noria__boxElements">
<img loading="lazy" class="noria__img" src="https://www.dropbox.com/s/j7dkh8krx7jwr58/bash.svg?raw=1" alt="logo bash" />
<p class="noria__text">{box}</p>
</div>
</li></Fragment>
))}
</ul>
</section>
</div>

</Fragment>;
