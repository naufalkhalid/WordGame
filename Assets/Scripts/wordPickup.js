function OnTriggerEnter (info:Collider) {
    Destroy(gameObject);
    CoinSystem.wordsCollect+=1;
}