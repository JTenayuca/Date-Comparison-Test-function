let RawSeq = "AGUUAC"
//"tgtggaactccatgatgcatctctcaccacccggcaccccctgcaggctcttttcatctg";

//console.log(GenSeq.toUpperCase());

let GenSeq = RawSeq.toUpperCase();

let ProtSeq = "";

//DNA to Protein:
function translate(GenSeq) {
 // let seq = document.getElementById("sequence").value;
  let seqArray = GenSeq.split("");
  console.log(seqArray);

  for(let i=0; i < seqArray.length; i+= 3) {
    console.log(seqArray[i]);
    let codon = seqArray[i] + seqArray[i + 1] + seqArray[i+2];
    console.log(codon);

    switch(codon) {
      case "ATA":
      case "ATT":
      case "ATC":
      ProtSeq += "I";
      break;

      case "CTT":
      case "CTC":
      case "CTA":
      case "CTG":
      case "TTA":
      case "TTG":
      ProtSeq += "L";
      break;

      case "GTT":
      case "GTC":
      case "GTA":
      case "GTG":
      ProtSeq += "V";
      break;

      case "TTT":
      case "TTC":
      ProtSeq += "F";
      break;

      case "ATG":
      ProtSeq += "M";
      break;

      case "TGT":
      case "TGC":
      ProtSeq += "C";
      break;

      case "GCT":
      case "GCC":
      case "GCA":
      case "GCG":
      ProtSeq += "A";
      break;

      case "GGT":
      case "GGC":
      case "GGA":
      case "GGG":
      ProtSeq += "G";
      break;

      case "CCT":
      case "CCC":
      case "CCA":
      case "CCG":
      ProtSeq += "P";
      break;

      case "ACT":
      case "ACC":
      case "ACA":
      case "ACG":
      ProtSeq += "T";
      break;

      case "TCT":
      case "TCC":
      case "TCA":
      case "TCG":
      case "AGT":
      case "AGC":
      ProtSeq += "S";
      break;

      case "TAT":
      case "TAC":
      ProtSeq += "Y";
      break;

      case "TGG":
      ProtSeq += "W";
      break;

      case "CAA":
      case "CAG":
      ProtSeq += "Q";
      break;

      case "AAT":
      case "AAC":
      ProtSeq += "N";
      break;

      case "CAT":
      case "CAC":
      ProtSeq += "H";
      break;

      case "GAA":
      case "GAG":
      ProtSeq += "E";
      break;

      case "GAT":
      case "GAC":
      ProtSeq += "D";
      break;

      case "AAA":
      case "AAG":
      ProtSeq += "K";
      break;

      case "CGT":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
      ProtSeq += "R";
      break;

      case "TAA":
      case "TAG":
      case "TGA":
      ProtSeq += ""
      break;

      default:
      ProtSeq += "*";

    }
    /*if(codon === "ATC") {
      ProtSeq += "I";
    }
    else if(codon === "GCC") {
      ProtSeq += "A";
    }
    */
  }
  console.log(ProtSeq);
};


//DNA to RNA and RNA to DNA translator:

function convertNucleotides(GenSeq) {
  let seqArray = GenSeq.split("");
  console.log(seqArray);

  for (let i = 0; i < seqArray.length; i++) {
    if (seqArray[i] === "T") {
      seqArray[i] = "U"
    }
    else if(seqArray[i] === "U") {
      seqArray[i] = "T";
    }
  }
  return seqArray.join("");
};

//translate(GenSeq);
//convertNucleotides(GenSeq);

//RNA to Protein:

function RNAtoProtein(GenSeq) {
 let RNAtoDNA = convertNucleotides(GenSeq);
 console.log("RNAtoDNA: " + RNAtoDNA);
  translate(RNAtoDNA);
};


RNAtoProtein(GenSeq);
