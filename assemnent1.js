let NFTS = [];
// NFT TYPE : SHOES.
function minNFT(brand_name,founder,start_year,shoe_type,color, NFT_price){
   const nft ={
       "Brand Name" : brand_name,
       "Brand Founder" : founder,
       "Foundation year": start_year,
       "popular shoe " : shoe_type,
       "popular color" : color,
       "price" : NFT_price
   };
   NFTS.push(nft);
}
function listNFTs() {
    for(let i=0;i<NFTS.length;i++){
        console.log("NFT.No : "+(i+1));

        console.log("Brand Name, Brand Founder, Foundation year, popular shoe, popular color, price");
        
        console.log(NFTS[i]["Brand Name"]+ "," + NFTS[i]["Brand Founder"]+ "," +NFTS[i]["Foundation year"]+ "," +NFTS[i]["popular shoe"]+ ","+NFTS[i]["popular color"]+","+ NFTS[i]["price"]);

    }
}
getTotalSupply = () => {
    return NFTS.length;
}
minNFT("Nike","Phil Knight",1964,"Air Force 1s","Black and White","$41.02M");
minNFT("Puma","Rudolf Dassler",1948," The Suede","Black","$23.52M");
minNFT("Adidas","Adolf Dassler",1949,"Supersatr","White","$50.82M");


console.log("Total no. of NFTs : "+getTotalSupply());
listNFTs();