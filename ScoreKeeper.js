class ScoreKeeper{

    constructor(){
    var ones,twos,threes,fours,fives,sixes,threeKind,fourKind,fullHouse,sStraight,lStraight,fiveKind,bonus,freePlay = 0;
    };

    get TotalScore(){

        return ones+twos+threes+fours+fives+sixes+threeKind+fourKind+fullHouse+sStraight+lStraight+fiveKind+bonus+freePlay;
    }



}