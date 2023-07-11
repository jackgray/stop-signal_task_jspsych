/* #########################################################################

  Customize the experiment

########################################################################## */

// ----- CUSTOMISE THE STIMULI AND RESPONSES -----
// locate the stimuli that will be used in the experiment
var fix_stim = 'images/fix_black.png';//'images/fix.png';
var go_stim1 = 'images/go_left_black.png';//'images/go_left.png';
var go_stim2 = 'images/go_right_black.png';//'images/go_right.png';
var stop_stim1 = 'images/stop_left_black.png';//'images/stop_left.png';
var stop_stim2 = 'images/stop_right_black.png';//'images/stop_right.png';


// define the appropriate response (key) for each stimulus
// (this will also be used to set the allowed response keys)

var cresp_stim1 = 'leftarrow';
var cresp_stim2 = 'rightarrow';

 // added by Greg Kronberg 2020.09.21 to account for using right or left hand in MRI scanner
  //---------------------------------------------------------------------------------------
var cresp_stim1_left = 56;
var cresp_stim2_left = 55;
var cresp_stim1_right = 50;
var cresp_stim2_right = 51;

// here you can change the names of the stimuli in the data file

var choice_stim1 = 'left';
var choice_stim2 = 'right';


// ----- CUSTOMISE THE BASIC DESIGN -----

// Define the proportion of stop signals.
// This will be used to determine the number of trials of the basic design (in the main experiment file):
// Ntrials basic design = number of stimuli / proportion of stop signals
// E.g., when nprop = 1/4 (or .25), then the basic design contains 8 trials (2 * 4).
// The following values are allowed: 1/6, 1/5, 1/4, 1/3. 1/4 = default (recommended) value

var nprop = 1/4;

// How many times should we repeat the basic design per block?
// E.g. when NdesignReps = 8 and nprop = 1/4 (see above), the number of trials per block = 64 (8*8)
// Do this for the practice and experimental phases (note: practice can never be higher than exp)

var NdesignReps_practice = 0;
var NdesignReps_exp = 12;

// Number of experimental blocks (excluding the first practice block).
// Note that NexpBl = 0 will still run the practice block

var NexpBL = 2;


// ----- CUSTOMISE THE TIME INTERVALS -----

var ITIDUR = [750, 1000, 1250, 1500, 1750, 2000]; // ITI will be chosen at random between these values (Ahmet: no longer relevant; FIX used for ITI)
var FIX = [1500, 2000, 2500, 3000, 3500, 4000];    // ITI will be chosen at random between these values
var MAXRT = 1500; // fixed maximum reaction time (now that ITIDUR=0, MAXRT changed from 1250 to 1500)
var SSD = 200;    // start value for the SSD tracking procedure; will be updated throughout the experiment
var SSDstep = 50; // step size of the SSD tracking procedure; this is also the lowest possible SSD
var iFBT = 750;   // immediate feedback interval (during the practice phase)
var bFBT = 10000; // break interval between blocks


// ----- CUSTOMISE INPUT/OUTPUT VARIABLES -----
// participant ID:
// - ID via participant (e.g. when the participant gets a number via experimenter)
// - ID via the URL of the experiment: 'XXXX.html?subject=15'(subject is the current keyword)
// - determine ID at random with jsPsych.randomization.randomID().

var id = 'participant' // use one of these three options: 'participant', 'url', 'random'


// ----- CUSTOMISE SCREEN VARIABLES -----
// Please note that Safari does not support keyboard input when in full mode!!!
// Therefore, this browser will be excluded by default

var background_color = 'black'
var fullscreen = true; // Fullscreen mode or not?
var minWidth = 800; // minimum width of the experiment window
var minHeight = 600; // minimum height of the experiment window


// ----- CUSTOMISE END-OF-EXPERIMENT REDIRECTION -----
// !!!!! use https ! (and link to your own experiment with https)
// should we redirect to another URL when the experiment ends? (useful for redirecting to e.g. Prolific or MTurk)

var redirect_onCompletion = false;
var redirect_link = 'https://osf.io'
