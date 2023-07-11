// instructions page 1
var page1 = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Your main task is to respond to white arrows that appear on the screen.</p> '+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Press with your INDEX FINGER when you see a LEFT ARROW and press with your MIDDLE FINGER when you see a RIGHT ARROW. </p>'+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Thus, left arrow = index finger and right arrow = middle finger. </p>'+ 
  '<br>'
];

// instructions page 1
var page1_left_handed = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Your main task is to respond to white arrows that appear on the screen.</p> '+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Press the LEFT ARROW KEY with your MIDDLE FINGER when you see a LEFT ARROW and press the RIGHT ARROW KEY with your INDEX FINGER when you see a RIGHT ARROW. </p>'+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Thus, left arrow = middle finger and right arrow = index finger. </p>'+ 
  '<br>'
];
// instructions page 1
var page1_right_handed = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Your main task is to respond to white arrows that appear on the screen.</p> '+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Press the LEFT ARROW KEY with your INDEX FINGER when you see a LEFT ARROW and press the RIGHT ARROW KEY with MIDDLE FINGER when you see a RIGHT ARROW. </p>'+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">Thus, left arrow = index finger and right arrow = middle finger. </p>'+ 
  '<br>'
];

var page2 = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">However, on some trials (stop-signal trials) the arrows will turn red after a variable delay. You have to stop your response when this happens. </p>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">On approximately half of the stop-signal trials, the red stop signal will appear soon and you will notice that it will be easy to stop your response. </p>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white">On the other half of the trials, the red stop signals will appear late and it will become very difficult or even impossible to stop your response.</p>'+
  '<br>'
];

// instructions page 3
// Do not forget to adjust the number of blocks
var page3 = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white"> Nevertheless, it is really important that you do not wait for the stop signal to occur and that you respond as quickly and as accurately as possible to the white arrows. </p>'+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white"> After all, if you start waiting for the red stop signals, then the program will delay their presentation. This will result in long reaction times. </p>'+
  '<br>'
];

// instructions page 3
// Do not forget to adjust the number of blocks
var page4 = [
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white"> We will start with a short practice block in which you will receive immediate feedback. You will no longer receive immediate feedback in the experimental phase. </p>'+
  '<br>'+
  '<p style="margin-left:10%; margin-right:10%; font-size:32px; line-height:1.4; color:white"> However, at the end of each experimental block, there will be a 10 second break. During this break, we will show you some information about your mean performance in the previous block.</p>'+
  '<br>'
];

// informed consent text
var informed_consent_text = [
  '<p> Type your informed consent text in the text_variables.js file... </p>'
];

// trial by trial feedback messages
correct_msg = '<p style="font-size:32px; color:white"> correct response </p>'
incorrect_msg = '<p style="font-size:32px; color:white"> incorrect response </p>'
too_slow_msg = '<p style="font-size:32px; color:white"> too slow </p>'
too_fast_msg = '<p style="font-size:32px; color:white"> too fast </p>'
correct_stop_msg = '<p style="font-size:32px; color:white"> correct stop </p>'
incorrect_stop_msg = '<p style="font-size:32px; color:white"> remember: try to stop </p>'

// block feedback
no_signal_header = '<p style="font-size:32px; color:white"><b>GO TRIALS: </b></p>'
avg_rt_msg = '<p style="font-size:32px; color:white">Average response time = %d milliseconds</p>'
prop_miss_msg = '<p style="font-size:32px; color:white">Proportion missed go = %.2f (should be 0)</p>'
stop_signal_header = '<br> <p style="font-size:32px; color:white"><b>STOP-SIGNAL TRIALS: </b></p>'
prop_corr_msg = '<p style="font-size:32px; color:white">Proportion correct stops = %.2f (should be close to 0.5)</p>' + '<br>'
next_block_msg = '<p style="font-size:20px; color:white">You can take a short break, the next block starts in <span id="timer">15</span></p>'
final_block_msg = '<p style="font-size:32px; color:white">Press space to continue...</p>' // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p style="font-size:32px; color:white">The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = ['<p style="font-size:32px; color:white">Stop-Signal Task: Practice</p>'];
var not_supported_message = ['<p style="font-size:32px; color:white">This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = '<p style="font-size:32px; color:white">Enter participant ID.</p>'
// var MRIday_instructions = "Enter MRI session (1 or 2)."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p style="font-size:32px; color:white">Press space to begin.</p>'
var get_ready_message = '<p style="font-size:32px; color:white">Get ready...</p>'
var fixation_text = '<div style="font-size:60px; color:white">TEST</div>'
var end_message = '<p style="font-size:32px; color:white">End of run.</p>' +
  '<p style="font-size:32px; color:white">Please wait for the experimenter.</p>'

// added by Greg Kronberg 2020.09.21
// modified by Jack Gray 2023.02.14 to allow any type of session, not just MRI
//------------------------------------
// var MRIday_instructions = "Enter MRI session"
// var MRIday_options = ['1','2']
// var hand_instructions = "Select participant's dominant hand"
// var hand_options = ['Left', 'Right']

var MRIday_instructions = '<p style="display:inline; font-size:32px;color:white">Enter MRI session</p>'
var MRIday_options = ['<p style="display:inline; font-size:32px;color:white">1</p>','<p style="display:inline; font-size:32px;color:white">2</p>']
var session_instructions = '<p style="display:inline; font-size:32px;color:white">Enter the session ID</p>'
var session_options = ['<p style="display:inline; font-size:32px;color:white">1</p>','<p style="display:inline; font-size:32px;color:white">2</p>']

var hand_instructions = '<p style="display:inline; font-size:32px;color:white">Select participant\'s dominant hand</p>'
var hand_options = ['<p style="display:inline; font-size:32px;color:white">Left</p>','<p style="display:inline; font-size:32px;color:white">Right</p>']
prop_incorrect_msg = '<p style="display:inline; font-size:32px;color:white">Proportion incorrect go = %.2f (should be 0)</p>'
