function showDress(data){
  // var nreContent = ' '; //가져온 html을 저장
  forEach((a, i)=>{
    let box = `<div class="object">
<div class="img-box"><img src="http://via.placeholder.com/600" alt=""></div>
<div class="text-box">
  <h2 class="title" id="title">${data[i].title}</h2>
  <ul>
    <li>등록 : <span id="text1">02. 16.</span></li>
    <li>도네 : <span id="text2">${data[i].price}</span></li>
  </ul>
</div>
<button class="open-btn">누르고십지</button>
</div>`;
$('.wrap').append(box);
  });
};