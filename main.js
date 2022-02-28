//클래스에 slide_btn있으면 클릭시 늘어나고 줄어들게 끔하자.
//클릭해도 안 사라졌음 하는것은 data-slideheader

/*
  1. 기본적으로 overflow:hidden;과 max-height가 설정 되어있어야해
        + 자식 노드들은 hidden클래스 가져야함.
  2. 클릭시 바로 아래 자식노드들만 hidden클래스 없애고 max-height크기를 키워야함.
  

*/
class Slide{
  constructor(){
    this.slideEle = document.querySelectorAll('.slide_btn');
    
    this.initsetting();

    this.slideEle.forEach(element => {

    });
  }

  slideDown(ele){

  }
}

const slide = new Slide();