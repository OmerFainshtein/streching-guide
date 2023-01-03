tipArray = ['Stretch as often as you can — daily, if possible', 'Move into each stretching position slowly',
 'Notice how much tension you feel - \n It should never cause severe or sharp pain anywhere else in your body'
, 'As you hold each position, take at least two deep breaths', 'Never bounce - forceful bouncing increases the risk of tearing a muscle'];
function popTip(){
    currTip = tipArray[Math.floor(Math.random()*5)];
    alert(currTip);
}