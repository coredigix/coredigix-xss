// 
// encode/decode text
log.title('Test: "escape", "unescape", "encode", "decode" ');
var lst = ['Marcel ASSARAF', 'webskan <b>hello world</b>', "way of \"success\'\' hello\'\' kkk"];
lst.forEach(ele => {
	log.debug('plain text>> ' + ele);
	var encoded	= $$.xss.encode(ele);
	log.debug('encoded>> ' + encoded);
	assert($$.xss.decode(encoded) === ele, 'is encoded text correct');
});


// test clean simple codes
lst = [
	'<b>hi webskan</b> <div> ',
	`<div class="someclass ckk pp">
		test div
		<div attr="value" style="color:red">
			<div> end div <b> is ho ho </b></div>
		</div>
	</div>`,
	`<font color:"#cccccc" data-tt="hoho">test font color <i> and i </i></font>`,
	`Lorem ipsum dolor <b><b>sit</b> amet</b>, 
		<div>
			<div>
				<div>
					consectetur adip
				</div>
			<div>
		<div>
	end of test`,
	`this is a <a href="http://example.com">link</a>
	<a href="kkkk" target="dsfsdf"
		 class="hello sdfsdf sdf" attr ="qkjsd" jjsdjj   =  sdkjfhsd>
		  lorem <i>kkk</i> </a>`,
	`test images <img src="https://example.com/blank.png" width="748" height="845">
		<div width="4584" height="lll"><div>the seconde div shoold be removed</div></div>`
];

title('General tests:');
lst.forEach(ele => {
	try{
		title2('Original: ');
		addResult(ele);
		title2('Clean: ');
		var res	= $$.xss.clean(ele);
		addResult(res);
	} catch(err){
		error(err);
	}
});