static var wordsCollect : int = 0;

function OnGUI(){
    GUI.Label(Rect(10,10,90,40),("Words:"+wordsCollect));
}