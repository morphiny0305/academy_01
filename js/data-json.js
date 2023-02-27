var xhr = new XMLHttpRequest(); // 객체 생성
xhr.onload= function(){
  if(xhr.status == 200){
    //조건식에서 서버와 원활히 통신
    responseObject = JSON.parse(xhr.responseText);
    console.log('크큭..........성공');
  };
};
xhr.open('GET', 'js/data.json', true); // 요청
xhr.send(null); //요청받은 데이터를 전송