var reflist = document.getElementsByClassName('myref');
var imgholder = document.getElementById("srcimg");
var refbook = document.getElementById("textsrc");
//console.log(reflist);
for (var i = 0; i< reflist.length ; i++){
    //console.log(reflist[i]);
    reflist[i].onclick = RefClicked;
    reflist[i].onmouseenter = TurnItalic;
    reflist[i].onmouseleave = TurnNormal;
}

function RefClicked() {
    refbook.innerHTML = refIndex[imgIndex.indexOf(this.id)].text;
    //console.log(["./assets/imgs/",refIndex[imgIndex.indexOf(this.id)].ss,".png"].join(''));
    imgholder.src = ["./assets/imgs/",refIndex[imgIndex.indexOf(this.id)].ss,".png"].join('');
    console.log("test succesful for text: ",this.innerHTML);
}
function TurnItalic() {
    this.classList.toggle("italicp");
}
function TurnNormal() {
    this.classList.toggle("italicp");
}

var imgIndex = ["id00eldritchbody","id01underdarkfungi","id02ghostlywitches","id03unwillingshowofpower","id04witcharmor","id05touchy","id06socials","id07spiritwarfare","id08agathaallalong"];
var refIndex = [
    { text: "Foundry \"ad > Races > Slime Folk (Eldritch)\"", ss:"id00eldritchbooty"},
    { text: "https://forgottenrealms.fandom.com/wiki/Underdark?file=Underdark_Forest_AFR.jpg", ss:"id01underdarkFungi"},
    { text: "High level witches can hide as ghosts, but (HEADCANON) eldritch slime folks who enter a stupor after consuming bodies charged with psychic energy, can catch glimpses of them.", ss:"id02ghostlywitches"},
    { text: "I had captured a level 2 witch. Overpowering them with my superior acidic and twisting properties. Their last effort to break free was to release their Spirit of Desire, which is what left me bamboozled for long enough to allow them to escape.", ss:"id03legitimatedefense"},
    { text: "To a slime, the medium armor of Covenant of Steel witches would look heavy. Also given that these witches are above level 2 they have more than one spirit imbued into their weapons. Carrying more wepaons makes the whole setup look more cluttered, heavier.", ss:"id04witcharmor"},
    { text: "I gave no second thoughts to biting them. Also, they used the Chill Touch cantrip on me.", ss:"id05touchy"},
    { text: "Covenant of steel witches are essentially martyrs, and witches in general see all other living things as connected.", ss:"id06socials"},
    { text: "To my recollection, the spirits we fared against during the \"hands-on training\" were an excuse for the witch in the room to kill us all and produce a spirit of Hate. Steming from each of us feeling the pain that the others went through, and our witnessing of the souls of my brethren blurring away, they envious of our life force and we envious of their escape to the painful bludgeoning. Thus what i want to expose is two things: <ol><li>The killer witch / rogue covenant.</li><li>That the nature of the teaching system allows for these incidents, plus the practice to \"tame the monster\" could have also have all of us underlings killed by the spirits.</li></ol>", ss:"id07spiritwarfare"},
    { text: "This means that my interactions with other witches, specially from the covenant of Unity, will be surrounded with animosity from their part. And witches of the covenant of Steel will not recognize me as an individual within the coven, but they will likely accept me upon witnessing our overlapping skillset. You may even make it so one of them realises that I have remnants of skills unique to the covenant of Unity :pog.<br><br>Incidentally, this would mean that my \"Partners in Exile\" background feature triggers in response to rogue witches instead of whistleblowers like i believe i am. And is more likely that they, having heard of my infamy, will reach out to be of service to, expecting to call in favor down the road and have me kill someone. That last bit is quiet though, as to not make it so obvious.<br><br>After the reveal, by background would then be:<br><br>Background: Heretic<ul><li>New Purpose: (3) I will do all I can to help those in need (as an attempt to atone)</li><li>Personality Trait: (1) I 'll tend to assume everyone hates me.</li><li>Ideal: (1) Truth. I want to make sure people understand the true nature of things. (Good) With widespread knowledge, tragedies like mine will be less common, and maybe one day we will control spirits altogether.</li><li>Bond: (2) <i>I broke into a forbidden archive of my order and stole a sacred text. They are still looking for it, and for me.</i>. That's not really the case but is the closest from the bunch. The order is looking for me but more as a \"case study\" than for retribution. They still intend to jail me for that track record of course, if it happened in an area of weaker beings the spirit take over would have a very high cost of creature life. Don't forget witches see all creatures as parts of a whole.<b>This also means that there is NO ONE LEFT BEHIND THAT I HAVE TO RESCUE FROM THE ORDER</b> I was the monster all along.</li></ul>", ss:"id08agathaallalong"}
]