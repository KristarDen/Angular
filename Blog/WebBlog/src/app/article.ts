export class Block{
    type: number = 0; //0 - text | 1 - image | 2 - video | 3 - subtitle
    text: string = "";
  
    constructor(block_type: number, text_or_source: string){
  
      switch (block_type)
      {
  
        case 0 : this.type = block_type;
        this.text = text_or_source;
        break;
  
        
        case 1 : this.type = block_type;
        this.text = text_or_source;
        break;
  
        case 2 : this.type = block_type;
        this.text = text_or_source;
        break;

        case 3 : this.type = block_type;
        this.text = text_or_source;
        break;
  
        default: this.type = NaN;
        this.text = "";
      }
    }
  }
  
export class Article{
    name: string;
    tags: string[];
    blocks: Block[];
  
    constructor(article_name: string, article_tags: string[], inner_blocks: Block[]){
  
      if(article_name.trim() != ""){
        this.name = article_name;
      }
      else throw "Error! Exeption in Artical class constructor. Article name can't be empty";
      
      if(article_tags.length > 1){
        this.tags = article_tags;
      }
      else throw "Error! Exeption in Artical class constructor. You must include at least one tag";
  
      if(inner_blocks.length > 1){
        this.blocks = inner_blocks;
      }
      else throw "Error! Exeption in Artical class constructor. You must include at least one media block";
      
    }
  
  }