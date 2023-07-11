// instructions page 1

var page1 = [
  '<p style="font-size:32px; line-height:1.4; color:white">Respond to the white arrows: Left arrow = left key; right arrow = right key. </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Stop your response when the arrow turns red (stop-signal). </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Very important: Do not wait for the stop-signal! Respond as quickly and accurately as possible to white arrows.</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Unlike the practice block, you will not receive feedback following responses.</p>'
];

var page1_left = [
  '<p style="font-size:32px; line-height:1.4; color:white">Respond to the white arrows:</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">  Left arrow = middle finger</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">  Right arrow = index finger </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Stop your response when the arrow turns red (stop-signal). </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Very important: Do not wait for the stop-signal! Respond as quickly and accurately as possible to white arrows.</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Unlike the practice block, you will not receive feedback following responses.</p>'
];

var page1_right = [
  '<p style="font-size:32px; line-height:1.4; color:white">Respond to the white arrows:</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">  Left arrow = index finger</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">  Right arrow = middle finger </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Stop your response when the arrow turns red (stop-signal). </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Very important: Do not wait for the stop-signal! Respond as quickly and accurately as possible to white arrows.</p>'+
  '<p style="font-size:32px; line-height:1.4; color:white">Unlike the practice block, you will not receive feedback following responses.</p>'
];

// instructions page 2
// Do not forget to adjust the number of blocks
page2 = [
  '<p style="font-size:32px; line-height:1.4; color:white"> Nevertheless, it is really important that you do not wait for the stop signal to occur and that you respond as quickly and as accurately as possible to the white arrows. </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white"> After all, if you start waiting for the red stop signals, then the program will delay their presentation. This will result in long reaction times. </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white"> We will start with a short practice block in which you will receive immediate feedback. You will no longer receive immediate feedback in the experimental phase. </p>'+
  '<p style="font-size:32px; line-height:1.4; color:white"> However, at the end of each experimental block, there will be a 10 second break. During this break, we will show you some information about your mean performance in the previous block.</p>' +
  '<p style="font-size:32px; line-height:1.4; color:white"> The experiment consists of 1 practice block and 4 experimental blocks</p>'
];

// informed consent text
var informed_consent_text = [
  '<p> Type your informed consent text in the text_variables.js file... </p>'
];

// trial by trial feedback messages
correct_msg = '<p > correct response </p>'
incorrect_msg = '<p> incorrect response </p>'
too_slow_msg = '<p> too slow </p>'
too_fast_msg = '<p> too fast </p>'
correct_stop_msg = '<p> correct stop </p>'
incorrect_stop_msg = '<p> remember: try to stop </p>'

// block feedback
no_signal_header = '<p style="font-size:32px;color:white"><b>GO TRIALS: </b></p>'
avg_rt_msg = '<p style="font-size:32px;color:white">Average response time = %d milliseconds</p>'
prop_miss_msg = '<p style="font-size:32px;color:white">Proportion missed go = %.2f (should be 0)</p>'
stop_signal_header = '<br> <p style="font-size:32px;color:white"><b>STOP-SIGNAL TRIALS: </b></p>'
prop_corr_msg = '<p style="font-size:32px;color:white">Proportion correct stops = %.2f (should be close to 0.5)</p>' + '<br>'
next_block_msg = '<p style="color:white">You can take a short break, the next block starts in <span id=\'timer\'>15</span></p>'
final_block_msg = '<p style="font-size:32px;color:white">Press space to continue...</p>' // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p style="font-size:32px;color:white">The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = ['<p>Welcome to the experiment.</p>' + '<p>Press "Next" to begin.</p>'];
var not_supported_message = ['<p>This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = '<p style="font-size:32px; color:white"> Enter participant ID.</p>'
var MRIday_instructions = "Enter MRI session (1 or 2)."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p style="font-size:32px; line-height:1.4; color:white">Waiting for scanner.</p>'
var get_ready_message = '<p style="font-size:32px; color:white">Get ready...</p>'
var fixation_text = '<div style="font-size:60px;">TEST</div>'
var end_message = '<p style="font-size:32px;color:white">End of task. Please wait for the experimenter.</p>'

// added by Greg Kronberg 2020.09.21
//-----------------------------------
var start_block_key = '=' //triggered by scanner to sync timing
var MRIday_instructions = '<p style="display:inline; font-size:32px;color:white">Enter MRI session</p>'
var MRIday_options = ['<p style="display:inline; font-size:32px;color:white">1</p>','<p style="display:inline; font-size:32px;color:white">2</p>']
var hand_instructions = '<p style="display:inline; font-size:32px;color:white">Enter participant\'s dominant hand</p>'
var hand_options = ['<p style="display:inline; font-size:32px;color:white">Left</p>','<p style="display:inline; font-size:32px;color:white">Right</p>']
prop_incorrect_msg = '<p style="font-size:32px;color:white">Proportion incorrect go = %.2f (should be 0)</p>'
