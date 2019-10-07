/* Configure at https://www.betterplace.org/de/projects/40094-weitblick-schulbau-benin/manage/iframe_donation_form */
var _bp_iframe         = _bp_iframe || {};
_bp_iframe.project_id  = 40094; /* REQUIRED */
_bp_iframe.lang        = 'de'; /* Language of the form */
_bp_iframe.width  = 1000;  /* Custom iframe-tag-width, integer, minimum 450px */
_bp_iframe.color  = 'ff9900'; /* Button and banderole color, hex without "#" */
_bp_iframe.background_color = 'fff'; /* Background-color, hex without "#" */
_bp_iframe.default_amount   = 10;    /* Donation-amount, integer 1-99 */
window.onload = function() {
  var bp = document.createElement('script'); bp.type = 'text/javascript'; bp.async = true;
  bp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'asset1.betterplace.org/assets/load_donation_iframe.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bp, s);
};
