var zakazchik = '____________________________'
 var vlice = '____________________________'
let newdata =  new Date()
let ear = newdata.getUTCFullYear()+''
ear = ear.split('')

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	if(rand < 9) {
		return '00'+rand;
	}else if(rand > 9 && rand < 99) {
		return '0'+rand;
	} else {
	return rand;
	}

}

let random = randomInteger(0, 100)

let today = (newdata.getDate() < 10 ? '0' : '') + newdata.getDate() + ((newdata.getMonth() + 1) < 10 ? '0' : '') + (newdata.getMonth() + 1)  + ear[2] + ear[3] + random 
let datedogovot = (newdata.getUTCDate()<10? '0':'') + newdata.getUTCDate() + '.' + ((newdata.getUTCMonth()+1)<10? '0':'') + (newdata.getUTCMonth()+1) + '.'+ newdata.getUTCFullYear() 

export function varperem (obj) {

	console.log('PDF', obj, docInfo.content.length)
	docInfo.content[3] = { 
		text: 'Индивидуальный предприниматель Жижин Роман Валерьевич,  именуемый в дальнейшем  «Исполнитель»,  зарегистрированный в качестве ИП 02.04.2018г. ОГРНИП 318784700101411, с одной стороны, и "' + (obj.zakazchik || zakazchik) + '" именуемое в дальнейшем «Заказчик», в лице ' + (obj.vliceDirinput || vlice) + ' действующего на основании,'+ obj.documentUrlico +' с другой стороны, заключили настоящий Договор о нижеследующем:',
		fontSize:10,
		width: 'auto',
		alignment: 'left',
		margin:[0,30, 0,30]
	}

	//docInfo.content.push(
		
		docInfo.content[56] = {
		columns:[
		
			{
				width: '50%',
				text:'ИП Жижин Р.В.,',
				fontSize:10
			},
			{
				width: '50%',
				text:'ООО «' + (obj.zakazchik || zakazchik) + '», Место нахождения (ЕГРЮЛ): ',
				fontSize:10
			},

		
		],
		columnGap: 40,
	}
	docInfo.content[57] = {
		columns:[
		
			{
				width: '50%',
				text:'Юридический адрес: 190020, Санкт-Петербург, ул. Пр-кт Рижский, дом № 44, кв. 8',
				fontSize:10
			},
			{
				width: '50%',
				text:'Фактический адрес: ',
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[58] = {
		columns:[
		
			{
				width: '50%',
				text:'ИНН 182704177668',
				fontSize:10
			},
			{
				width: '50%',
				text:'ИНН/КПП ' + obj.inn + ' / '  + obj.kpp,
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[59] = {
		columns:[
		
			{
				width: '50%',
				text:'ОГРНИП 3182704177668',
				fontSize:10
			},
			{
				width: '50%',
				text:'ОГРН ' + obj.ogrn, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[60] = {
		columns:[
		
			{
				width: '50%',
				text:' ',
				fontSize:10
			},
			{
				width: '50%',
				text:'р/с ' + obj.rschet, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[61] = {
		columns:[
		
			{
				width: '50%',
				text:'р/с 40702810832360008837',
				fontSize:10
			},
			{
				width: '50%',
				text:'к/с ' + obj.kschet, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[62] = {
		columns:[
		
			{
				width: '50%',
				text:'Филиал № 7806 ВТБ (ПАО) г. Санкт-Петербург',
				fontSize:10
			},
			{
				width: '50%',
				text:'в ' + obj.bank, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[63] = {
		columns:[
			{
				width: '50%',
				text:'к/с 30101810300000000707',
				fontSize:10
			},
			{
				width: '50%',
				text:'БИК ' + obj.bik, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	docInfo.content[64] ={
		columns:[
			{
				width: '50%',
				text:'БИК 044030707',
				fontSize:10
			},
			{
				width: '50%',
				text:'Телефон ' + obj.tel, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[65] = {
		columns:[
			{
				width: '50%',
				text:' ',
				fontSize:10
			},
			{
				width: '50%',
				text:'Эл.почта: ' + obj.mailPoshta, 
				fontSize:10
			},
			
		
		],
		columnGap: 40
	}
	
	docInfo.content[66] = {
		text:'',
		fontSize:11,
		width: 'auto',
		alignment: 'center',
		margin:[0,30, 0,30]
		//pageBreak:'after'
	}
	docInfo.content[67] = {
			columns:[
				{
					width: '50%',
					text:'Исполнитель',
					fontSize:10
				},
				{
					width: '50%',
					text:'Заказчик', 
					fontSize:10
				},
				
			
			],
			columnGap: 40
		}
		
		docInfo.content[68] = {
			columns:[
				{
					width: '50%',
					text:'ООО «ЦЕНТР СЕРТИФИКАЦИИ И ИСПЫТАНИЙ»',
					fontSize:10
				},
				{
					width: '50%',
					text:'ООО «'  + (obj.zakazchik || zakazchik) +  '»', 
					fontSize:10
				},
				
			
			],
			columnGap: 40
		}
		
		docInfo.content[69] = {
			columns:[
				{
					width: '50%',
					text:'Генеральный директор',
					fontSize:10
				},
				{
					width: '50%',
					text:'Генеральный директор', 
					fontSize:10
				},
				
			
			],
			columnGap: 40
		}

		docInfo.content[70] = {
			text:'',
			fontSize:11,
			width: 'auto',
			alignment: 'center',
			margin:[0,30, 0,30]
			//pageBreak:'after'
		}

		docInfo.content[71] = {
			columns:[
				{
					width: '50%',
					text:'__________________ /Устименко В.А./',
					fontSize:10
				},
				{
					width: '50%',
					text:'__________________ /______________/', 
					fontSize:10
				},
				
			
			],
			columnGap: 40
		}
	
}


export var docInfo = {
	
	info: {
		title:'Тестовый документ PDF',
		author:'Viktor',
		subject:'Theme',
		keywords:'Ключевые слова'
	},
	
	pageSize:'A4',
	pageOrientation:'portrait',//'portrait'
	pageMargins:[50,50,30,60],
	
	header:function(currentPage,pageCount) {
		return {
			text: currentPage.toString() + 'из' + pageCount,
			alignment:'right',
			margin:[0,30,10,50]
		}
	},
	
	footer:[
		{
			text:'', //нижний колонтитул
			alignment:'center',//left  right
		}
	],
	
	content: [
	
		{
			text:'ДОГОВОР №'+ today+'',
			fontSize:10,
			width: 'auto',
			alignment: 'center',
			//margin:[260,30, 30,0]
			//pageBreak:'after'
		},
		
		{
			text:'',
			style:'header'
			//pageBreak:'before'
		},
		
		{
			columns:[
			
				{
					width:'50%',
					text:'г. Санкт-Петербург',
					margin:[0,30, 0,20],
					fontSize:10,
					alignment: 'left'
				},
				{
					width: '50%',
					text: datedogovot,
					margin:[0,30, 0,20],
					fontSize:10,
					alignment: 'right'
				},
				

			
			],
			columnGap: 20
		},
		{
			text:'Общество с ограниченной ответственностью «ЦЕНТР СЕРТИФИКАЦИИ И ИСПЫТАНИЙ»,  именуемое в дальнейшем  «Исполнитель»,  в лице Генерального директора Устименко Виктории Андреевны, действующего на основании Устава, с одной стороны, и "' + zakazchik + '" именуемое в дальнейшем «Заказчик», в лице ' + vlice + ' действующего на основании ______________________________, с другой стороны, заключили настоящий Договор о нижеследующем:',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,30, 0,30]
			//pageBreak:'after'
		},
		{
			text:'1. ПРЕДМЕТ ДОГОВОРА.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},
		{
			text:'1.1.	Заказчик поручает, а Исполнитель принимает на себя обязательства по предоставлению услуги по экспресс-доставке корреспонденции на условиях настоящего Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'1.2.	Порядок оказания Исполнителем услуги установлен в «Условиях перевозки корреспонденции» и размещен на сайте Исполнителя в сети Интернет по адресу: "https://межрегионтест.рф". Подписывая Договор Заказчик подтверждает факт ознакомления с порядком оказания услуг.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,5]
			//pageBreak:'after'
		},
		{
			text:'2.  ПРАВА И ОБЯЗАННОСТИ СТОРОН.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},
		{
			text:'2.1. Исполнитель обязуется предоставить Заказчику следующие услуги:',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.1. Исполнить поручение Заказчика, предусмотренное п.1.1. настоящего Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.2. Получить и обработать информацию для оформления услуги по экспресс-доставке корреспонденции.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.3. Провести поиск вариантов отправки корреспонденции и предоставить Заказчику для выбора необходимую информацию об отправке способом, указанным в заявке Заказчика, заполненной Заказчиком на сайте Исполнителя в сети Интернет по адресу: https://межрегионтест.рф',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.4. Консультирование отправителя по формированию заявочной документации, срокам  доставки и местам выдачи.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.5. По согласованию с Заказчиком провести оформление услуги.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.6. Ведение и хранение полного архива Заказчика, включающего в себя сведения о предыдущих заказах, а также иную информацию для выполнения новых заказов.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.7. Немедленно извещать Заказчика обо всех изменениях и обстоятельствах, препятствующих выполнению заказа.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.8. Подготовить документы для отчетности и  в указанные сроки оказать услугу',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2. Заказчик обязуется:',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.1. Размещать все заказы на услуги, предусмотренные настоящим Договором через Исполнителя, за исключением случаев, когда Исполнитель не имеет возможности предоставить соответствующую услугу.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.2. Своевременно направлять Исполнителю заказы на услуги с указанием всех необходимых данных и соответствующих документов.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.3. Следовать нормам и требованиям, содержащимся в «Условиях по перевозке корреспонденции».',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.4. Своевременно осуществлять расчеты с Исполнителем  в соответствии с разделом 3 настоящего Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.5. Оплачивать Исполнителю стоимость оказанных услуг согласно выставленным счетам.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.6. При изменении стоимости услуг по независящим от Исполнителя причинам, доплачивать разницу стоимости. Исполнитель в данном случае обязан предоставить официальные документы, подтверждающие необходимость доплаты со стороны Заказчика.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.7. Заказчик несет полную ответственность за информацию, переданную Исполнителю.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.8. Обеспечить доступ Исполнителя к содержимому отправки и ее упаковке. Исполнитель не несет ответственности за внутреннюю недостачу содержимого отправки или порчу имущества для доставки и доставленного Получателю при условии сохранения целостности внешней упаковки. Исполнитель не несет ответственности за утрату дохода, прибыли, непредвиденных расходов Заказчика, возникших в результате утраты, повреждения или несвоевременной доставки отправления.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.9. Самостоятельно информировать Получателя о месте и времени получения отправления.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.3. Заказчик имеет право:',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.3.1. Предъявлять обоснованные претензии к Исполнителю в соответствии со сроком и процедурами, предусмотренными законодательством РФ.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4. Исполнитель имеет право:',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.1. Проверять правильность объема и веса, указанного Заказчиком в форме заказа на специальном оборудовании в своем офисе. Если обнаруживается расхождение между заявленным объемом и весом в результате проверки, то за основу определения стоимости услуги берется наибольшее значение веса отправления.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.2. Изменять тарифы, сроки доставки, порядок и сроки оплаты.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.3. Привлекать к исполнению своих обязанностей третьих лиц. Возложение обязанностей на третьих лиц не освобождает Исполнителя от ответственности перед Заказчиком. Если нарушение обязательств Исполнителя по настоящему  Договору вызвано ненадлежащим исполнением обязательств третьими лицами, ответственность Исполнителя перед Заказчиком определяется по тем же причинам, по которым третье лицо отвечает перед Исполнителем. При этом размер ответственности Исполнителя не может быть ниже предела, установленного законодательством о перевозках соответствующим видом транспорта.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3. ПОРЯДОК РАСЧЕТОВ.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},
		{
			text:'3.1. Заказчик производит оплату Исполнителю с момента получения счета от Исполнителя в течение 3-х банковских дней.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.2. Заказчик производит  оплату  заказанных услуг по безналичному расчету.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.3. Не позднее 5-го числа месяца, следующего за отчетным, Заказчик и Исполнитель подписывают Акт сверки взаиморасчетов.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.4. Погашение выявленной дебиторской задолженности Заказчик производит в течение 2-х дней со дня подписания Акта.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4. ОТВЕТСТВЕННОСТЬ СТОРОН.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},
		{
			text:'4.1. Заказчик несет ответственность за аннуляцию услуги и обязуется в случае наступления штрафных санкций оплатить их в соответствии с условиями поставщика услуги, а также с реально понесенными расходами Исполнителя.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4.2. В случае просрочки оплаты счетов по вине Заказчика более чем на 3 (три) рабочих дня, Исполнитель вправе требовать от Заказчика уплаты пени в размере 0,05% за каждый день просрочки оплаты.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4.3. Исполнитель несет ответственность за неправильное оформление Исполнителем документации, нарушения установленного порядка оказания услуг, или иных случаев, за исключением случаев предоставления неверной информации самим Заказчиком. Ни при каких обстоятельствах не компенсируется Заказчику упущенная выгода.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'5. ОБСТОЯТЕЛЬСТВА НЕПРЕОДОЛИМОЙ СИЛЫ.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},

		{
			text:'5.1. Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящему Договору, если оно явилось следствием обстоятельств непреодолимой силы, т.е. чрезвычайных или непредотвратимых обстоятельств (такие как стихийные бедствия, действия государственных органов, забастовки, мятежи и войны), если эти обстоятельства непосредственно повлияли на исполнение настоящего Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},

		{
			text:'5.2. Обязательство доказывания наступления обстоятельств непреодолимой силы (на основании предоставления свидетельства компетентного органа) возлагается на Сторону, ссылающуюся на такие обстоятельства.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'5.3. Если обстоятельства непреодолимой силы или их последствия будут длиться более одного месяца, каждая из Сторон вправе расторгнуть настоящий Договор.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6. СРОК ДЕЙСТВИЯ И ПРЕКРАЩЕНИЕ ДОГОВОРА.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},
		{
			text:'6.1. Настоящий  Договор  заключен  на  неопределенный  срок и вступает в силу со дня подписания его уполномоченными представителями Сторон.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.2. Настоящий Договор подлежит расторжению по инициативе любой из Сторон путем направления письменного уведомления другой Стороне в срок, не менее чем за 30 (Тридцать) календарных дней до даты предполагаемого расторжения Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.3. Настоящий Договор может быть расторгнут Исполнителем в одностороннем порядке в случае, если в течение 6 (шести) месяцев Заказчик не оформляет заказы на услуги Исполнителя.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.4. Заказчик имеет право в одностороннем порядке расторгнуть Договор, письменно уведомив об этом Исполнителя, в случае несогласия с изменением размера стоимости услуг.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.5. Все споры и разногласия между сторонами разрешаются в установленном законом порядке в Арбитражном суде по месту нахождения истца.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.6. Во всем остальном, что не предусмотрено условиями настоящего Договора, Стороны руководствуются действующим законодательством РФ.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.7. Все изменения и дополнения к настоящему Договору принимаются Сторонами в письменном виде, заверяются уполномоченными представителями Сторон и оформляются в виде дополнительных соглашений и приложений, которые считаются неотъемлемыми частями настоящего Договора.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.8. Настоящий Договор составлен в двух экземплярах, имеющих равную юридическую силу, по одному для каждой из Сторон.',
			fontSize:10,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'7.  ЮРИДИЧЕСКИЕ АДРЕСА И БАНКОВСКИЕ РЕКВИЗИТЫ СТОРОН.',
			fontSize:11,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,15, 0,15]
			//pageBreak:'after'
		},

		
	],
	
	styles: {
		content: {
			fontSize:11,
			bold:true,
			alignment:'right'
		}
	}
}



export function varperemFiz (obj) {
	//today = obj.random
	console.log('PDF', obj, docInfo.content.length)
	

	 

	docInfoFiz.content[1].columns[2].text = 'Накладная \n №'+obj.random,
	docInfoFiz.content[2].table.body[0][1].text = '\n' + obj.telephone
	docInfoFiz.content[2].table.body[0][3].text = '\n' + obj.today
	docInfoFiz.content[2].table.body[1][0].text = obj.zakazchik
	docInfoFiz.content[2].table.body[2][0].text = obj.orgotpravit || ' '
	docInfoFiz.content[2].table.body[2][3].text = '\n' + obj.todayLast
	docInfoFiz.content[2].table.body[1][1].text = obj.zakazchik
	docInfoFiz.content[2].table.body[3][0].text = obj.citySetText + ', ' + obj.addressotprhis + ' ' + obj.indexSet
	docInfoFiz.content[2].table.body[6][1].text = '\n' + obj.telpoluchinput
	docInfoFiz.content[2].table.body[7][0].text = obj.fiopoluch
	docInfoFiz.content[2].table.body[8][0].text = obj.nazorg || ' '
	docInfoFiz.content[2].table.body[9][0].text = obj.cityGetText + ', '+ obj.addresspoluch + ' ' + obj.indexGet
	docInfoFiz.content[2].table.body[10][2].text = obj.commentszakaz
	docInfoFiz.content[2].table.body[13][0].text = obj.presoptionStateFace ==  1 ? 'По договору' : (obj.sposoboplati == 1 ? 'Наличными курьеру' : 'Картой онлайн')
	docInfoFiz.content[2].table.body[13][2].text = obj.price+' руб.'
	//docInfoFiz.content[2].table.body[10][0].text = obj.todayLast

	//let block = obj.opis.map((item, index) => {
	//	return [
	//		{text: (item.title = 1 ? 'Документы' :  item.title = 2 ? 'Груз' : 'Контейнер') + ', ' + item.parametr +  item.gabarit ? ', ' + item.gabarit : '',colSpan: 4, alignment: 'center'}, 
	//		{text: '', rowSpan: 2,  alignment: 'center'}, 
	//		{text: '', rowSpan: 2,  alignment: 'center'}, 
	//		{text: '', rowSpan: 2, alignment: 'center'}
	//	]
	//})
	//docInfoFiz.content.push(block[0])


	docInfoFiz.content[2].table.body[15] = [
		
		{fontSize:8, text: '' +  (obj.opis[0].title == 1 ? 'Документы' : obj.opis[0].title == 2 ? 'Груз' : 'Контейнер') + ', вес ' +  obj.opis[0].parametr +  ' ' +  (obj.opis[0].gabarit == null ? '' :  ', габариты ' + obj.opis[0].gabarit ) +  (obj.opis[0].hrupkoe ? ' Хрупкое': '') + '\n ' + obj.opis[0].comments, colSpan: 4, alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}
	]
	obj.opis[1] ? 
	docInfoFiz.content[2].table.body[16] = [
		
		{fontSize:8, text: '' +  (obj.opis[1].title == 1 ? 'Документы' : obj.opis[1].title == 2 ? 'Груз' : 'Контейнер') + ', вес ' +  obj.opis[1].parametr +  ' ' +  (obj.opis[1].gabarit == null ? '' :  ', габариты ' + obj.opis[1].gabarit ) + (obj.opis[1].hrupkoe ? ' Хрупкое': '') +  '\n ' + obj.opis[1].comments, colSpan: 4, alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}
	]
	: false

	obj.opis[2] ?
	docInfoFiz.content[2].table.body[17] = [
		
		{fontSize:8, text: '' +  (obj.opis[2].title == 1 ? 'Документы' : obj.opis[2].title == 2 ? 'Груз' : 'Контейнер') + ', вес ' +  obj.opis[2].parametr +  ' ' +  (obj.opis[2].gabarit == null ? '' :  ', габариты ' + obj.opis[2].gabarit ) + (obj.opis[2].hrupkoe ? ' Хрупкое': '') +  '\n ' + obj.opis[2].comments, colSpan: 4, alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}
	]
	: false

	
	obj.opis[3] ?
	docInfoFiz.content[2].table.body[18] = [
		
		{fontSize:8, text: '' +  (obj.opis[3].title == 1 ? 'Документы' : obj.opis[3].title == 2 ? 'Груз' : 'Контейнер') + ', вес ' +  obj.opis[3].parametr +  ' ' +  (obj.opis[3].gabarit == null ? '' :  ', габариты ' + obj.opis[3].gabarit ) + (obj.opis[3].hrupkoe ? ' Хрупкое': '') +  '\n ' + obj.opis[3].comments, colSpan: 4, alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}
	]
	: false

	obj.opis[4] ?
	docInfoFiz.content[2].table.body[19] = [
		
		{fontSize:8, text: '' +  (obj.opis[4].title == 1 ? 'Документы' : obj.opis[4].title == 2 ? 'Груз' : 'Контейнер') + ', вес ' +  obj.opis[4].parametr +  ' ' +  (obj.opis[4].gabarit == null ? '' :  ', габариты ' + obj.opis[4].gabarit ) + (obj.opis[4].hrupkoe ? ' Хрупкое': '') +  '\n ' + obj.opis[4].comments, colSpan: 4, alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}, 
		{text: '', style: 'tableHeader', alignment: 'center'}
	]
	: false



}	


export var docInfoFiz = {
	
	info: {
		title:'Тестовый документ PDF',
		author:'Viktor',
		subject:'Theme',
		keywords:'Ключевые слова'
	},
	
	pageSize:'A4',
	pageOrientation:'portrait',//'portrait'
	pageMargins:[50,5,30,55],
	
	//header:function(currentPage,pageCount) {
	//	return {
	//		text: 'Накладная  №24523454',
	//		color: '#1d457d', 
	//		alignment:'right',
	//		margin:[0,30,10,50]
	//	}
	//},
	
	footer:{
		columns: [
			{
				text:'', //нижний колонтитул
				alignment:'right',//left  right
				fontSize:6.5,
				bold:false,
				margin:[0,0, 30,0],
				width: 350
			},
			{
				text:'', //нижний колонтитул
				alignment:'left',//left  right
				fontSize:6.5,
				bold:false,
				margin:[0,0, 30,0],
			}
		]
	},
	
	content: [
		{
			text:'',
			style:'header',
			bold:false,
			//pageBreak:'before'
		},
		{
			columns: [
				{
					// if you specify width, image will scale proportionally
					image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEaBVIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiql9q1jpfkC9vLe0M7iKLz5VTzHPRVyeT7CrdK6vYdnuFFFFMQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVT1jV7TQdLutRv5lt7O1jMssjdAo/mfbvSbUVd7DSbdkXKK8c0H9pzQ9fvJY4dC1w2sfL3UVqJljUDJZwhJUdema9T1XXLbSdGl1OQmW3RA6+VgmTdgKFyQMkkAEkDnkgc1x0Mbh8VFzozTSOirhq1GSjUjZs0KgvL23061kubueK1toxueaZwiIPUk8AVBourwa9pdvfW4ZYphna+NykEhlOCRkEEcEjjgkc14h+1bJeyWWh2qMv2KRbhzE6OwllCoF+6OCqtIw3ccH0qMbi/quFliIrmtb8SsNh/b11RbtcT4zeL9E8RNYSaZe2upRm3ngMkIEo374WCO24eUjAMTLyBt9q9l0HxVoWuM9rpWrWd9Lbja8UE6u6gcZIBzj36V8JalfQoptYzlLeN4QYp2dNu6Rh8wA3DMoAyO3vW3o2tXlv4w0y70yYfaI7qFLHy/MXzAXRFCgsMnYnlN8u3CYySQT8Nh+IJRryqSinzct0n27f15aH1FbKlKlGCk1y3t/wT7roorKh8TWE2tPpavJ9qXcMmJhGWAViofG0kBgcZ/ka/R3JRtdnxqi5bI1aK5jxp8SfDvw+jhbXNRW0efJiiVGkkfHUhVB49zxUXgX4oeHfiMtx/Yl6ZpbfBlhkjaN1B6HBHI47Vh9aoe19hzrn7XV/uNvYVeT2vK+XvbQ6yiiiukwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuN8XfFDTPCPizw9oN1kz6q5DSZ+WBT8qM3+8+F/M9q7FmCqSTgDkk187/Fya2h+ImpnUYftmk6voCfZ5Yjk4ilDu0R6bkQNIPXAH8VeVmWInhqKnTdndb/112+Z34OjGtU5Z7W/r7t/kfRNfMUOoa349+JOm+G/FdwsFnOsjnf8AMvnKpLxJG37rcrgqN6FtoBydwJ7vQvGuveMvhjqumaPeRv40sYY0juFIC3UZYbbhC3HzoG6/dbOQOleLeIPCHi/T/iZomm6lrEOpeIWu4biN7eRnbexGXJZVPypEmTjAAUDODjwc1xjqxoypQk4tq/Z3duV+ej2PVwGH9nKpGckpa27rTdeWp2XjbwhbQ/GPR9E0NZofsViJd0kzyfv5HZEbDHAClkYhcfKrDsKtfF/4tanptxq3hOwtLaLRrNFtLmZ0kln27EK5AKqFcnZg5yCfpXpnxE8DSTatD4u0i/tdN1uyjVC2oNi1lVSSA56qfmYZ9G+hHgnxE8RaT4m8ZS3PiC3awaKENLDpMi3sc8oG1pFkAXHyKi4JOCOe5rmx8J4KFWMJcjnK/ZONrWv06X6vp3N8LKOKlCUlzKK+d7/j5djvPgj8atR1O80Hwxe2dm9s9vHb2stqjxSKqRScsrEhseSQSnAz26V33x80W31j4Y6q01wLSe0X7TbTZwfMGRsHqXDMgHffXzn4E+Inhj4b+Kp9VtYdQ1dFtfLtoGjWCNJSACxy7HO0bd2M8ng9a2oPFGrftCeMNPtdQFxDpyTZh0yxhDxRKPvTSyOcZAPUqwPTaN3OGGzSM8E8HUl7SpK8Ul22vf8AFbs0rYJxxKxEFyQjq3577f0jhbOzs9LsZYBrVtbJNbpI4ubFvMkTzFkBUMec+WnHAIHTnJ9D/Z78F2k/xKe4llXyrGD7ZDbyQmJmkIwhVXJcqFfdk/3kPcV79a/CXwlb26xNoltcvnL3FwvmTSnnJdzy3U9eOcdOK8i+N3gO2+H8+m+JtAnudFaCQiOaGPzILV8khDg7kjcluMOoPAC7jkllE8u5MXOKkqdnZN7fN28/z7gswjjOahFtOXV2/Q9n+IXje3+H/hx9VuIxIvmpCgYlU3MeCzBWIX3wa+eYPjpf2PjK816Tw5BHfeS0M1m0ku6Pp1IBCkiIDO0Z3DJwBiXWP2lLHxZ4HvtJ1ixmtdZVN9tfWKq8DTxncj7XwVBZQMYbgmvNpdG8LLoqz2WuyNqK/OizxoNzjJwVIGAcd2I+tTmObyxFSMsFVXKle2id/nu/w9b6PB5fGlCSxEHdu3Xb5Hsnxm1678TeBbTxNpM11pouo9rLG7KS1vLIrRk4BIIkkfkDIhyQKj8Q+C7X4deE7L4ieHbuRGWCCYhdkMrpLsAGVXy2XLDKtGSeu4YFa2m6LqXxE8D6D4c0bSZdI8MW9sM6tfvEXm3RNGxSNGPJEjt164HHOcr9prT77S9F8F6Bpgb+yYVeNY25WR4kQRK3qdu4AY5JNdOKjL2NXGyi2+WNnrpPvFPpd38+hlRkvaQw0XbV3X93s/kj1X4S+NdR8baDJdanarbzoy42oUO1lDAMuThsEHryGU4GcDovE3irTfCNnb3WqXAt4Z7mO1Rj3d2wPwHJPoATXlfwV1zxvDrR0vXNEhtdDnt5dQivYwG3M7hsmRWKtu3E8/MRzniuT+KvirTvHr61eXcu7RdNsLhdIhB4uJsiJro/7AkZY09Tkjoa9f8AtJ0sCqmvP/eVtt2/Lz6uy6nnfU1UxTj9ny132XqfS9FYvgmS6m8G6C98GF61hbtOG6+YY13Z/HNbVfRQlzxUu548o8snHsFFFFWSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFfULc3ljc26tsaWNkDDtkEZr5RZRpHhnTNHv7q4mtoY/OVnTddaNeRMUlMY/wCWkQZQXjHIVgwGOa+kfiJNrdr4TvLnw9N5WpW+2YDyRKXQH51CnqduSBxkgDPNfMPxO1+PVtQLtf6ff3DBLnz7eF7J5xt+SdAWZC2MKdrgsBtK7lBX5HPakYWb3S+Tv03u9u3ndOx9DlcHK66N/NW/4fv5bXOW0fW9Y+H/AIoXUNIkHm6eTIbZX8yKSB8ElCOXiPX24brnH0z4NuvC/wAbm03xfBbzWGu6TJ5RaObbLHwTsbHDoQxxkd2HqK+Q7gzyxLfWl8xePIeHeEmhJzuwBjKnnJX3yBnnsvA3i7V/hT4ii1a0t5JLSazha5sJQYvtEW0KzDjqsit82PfkE18flmYfVqvJUV6LabW9u0l6W1t+eh9BjcJ7aHNB2qJadL90/U9p/aE8M6v44utCtNMWW7sJgxXyAzKHUneDgEKSCuGbAGxxkZIPztcQ33w91qS2i1VIL6EkC6065zJAzDafmQkcgkEKc+vIAr6H0bwDoXxksbnXdG8T61pNhqUhfUNFtbkCNJjzICnQEnJyQc5z3xWn4T/Z38N2uoa62qaT59q10I7GB5W2CFY0w5wRlixbOfTtk17mMy2tmVZYmikubaXNdWt0sr9PVX+Z5mHxlLB03RqO9t1bW9/M+X7TOtXkV1qOpNqxUM8kN1JKWJHUFs5AYDhhnnG7Fdt8HfE9n8O/EU+pXlutzujAiWOeZGjVgSp8tVYOrBxjf0J7Hmu7+I37LMGm6Xc6p4Rubtr2BzMLCZw2UHO2JgA24dskk+uevmHhbQStiHNoJpvKd5bWXH71kwfkbqA0csa8ZDGRD8y7gPCjg8Xl+Kh7SCUlqpbp9P6XTdI9T6xQxlGXLK8XpbZn194X8T6h4h0ObUbjw9e6S4UtDZ3bIJpeM9M/Lk8fNj8K8i+LXxT07xZ4X1DQJNG1nS77OfLvpUtGXAI3lVdi8Yzkgjaexz07f4S/EzTvEPga6upb0smiqVnnuCN/khdyO+P4tnDerI2OMV4f4w1v/hZGo318i+Z58iWxkmAdIdxwsUa5wSgdckn/AFsmRhQWr7LH4vmwkFTqc3On0Wvf0/I+ewmHtiJc8Lcr89DzCPQTJpzXTSKt4sgcGaQbZVJ4IRl6dWLsQuB3JxVyLXr/APs+fTZ720ks0bMcMKRKHkUnadwUHaDzycHA6gV0PgD4R638TtVmt7WSbT9AjfzDdXXzlUIxGAvG9tgXHQYweARn2Oz/AGSdBt9Fkil1S7udWKNtuSqrCGI4/d4Jx/wLPoRXxGDyvG4mPtMPC0drt25vl1/I+jxGOw1GXJVld+l7HjnhGx8Y+Ete0/VE+1WU92dttHLKVFwSMRqAT+8UttB68HP0+qfiV8N4fiZY2Gn3l/Jaafb3IuZY4IwZJSAQAHP3eGPY9a8s8B/Cvx5pfhfSbnQfE66XHc26yS6bqcPnJbyc/PHuVgCfvcAdepFU/HXxiTwZ4VufCWiatNrvictIuoaw3Cox+aRlPqPugDhQvqK+nwfssvwk44yMuSSvaTWr7Rs7u/XRW6njYjnxdeLw7XNHTS+i7u6srer8h3xi+NFhb2Mfgrwmd8EaG2vJoSUWOKMFTCjHoMKQzdAvTPbz/wAHW9vdww6lrML3ttPOrQaZbLh9QkiGI7dB/DBGCS7dOg5K5rgPLnt5F0uzt2uJZljeZVUmRztDGPjkKO49V56DHUeF7661DV0gbF06hUkhtYmmBVSMK5XjyE67FIVsAE4yw+b+v1MZieet6JdF5edvxu9LaP2FhYYejyU/Vvq/6/ruvpz4Rap4h1bVvFj6/dQ3DxXMEccdoc28BMIdo0PfbvUE9zmvSq8w+GPiqKG+tvDVrol9Csls+oyajdXMErTbnIaWTynbDO+eM9jjhePT6/UcBJOglzNvW9733vbXtex8Ri01VelttvuCiiivQOMKK5u6+JXhGxupra58U6Lb3MLtHLDLqMKujA4KsC2QQRgg1F/wtTwV/wBDfoP/AIM4P/iqvkl2FzLudTRSKwdQykMpGQR0NLUDCiiszW/FGjeGVhbV9WsdKWYkRm+uUhD4xnbuIzjI6etNJvRAadFct/wtTwV/0N+g/wDgzg/+KrW0TxPo/iVJX0jVrHVUhIEjWNykwQnoDtJxnBpuMlq0K6NOiqWra1p+g2Zu9TvrbTrRSFM93MsSAnoNzEDJrD/4Wp4K/wChv0H/AMGcH/xVCjJ7ILo6miuW/wCFqeCv+hv0H/wZwf8AxVH/AAtTwV/0N+g/+DOD/wCKp8kuwcy7nU0Vy3/C1PBX/Q36D/4M4P8A4qupqXFrdBdPYKKwNU8f+GNEvpbLUfEmkWF5FjzLe6voo5EyARlWYEZBB+hFVf8Ahangr/ob9B/8GcH/AMVVcsuwcyOpoqrpeq2Wt2MV7p15b39nLny7i1lWSN8Eg4ZSQcEEfUGsOb4neDreZ4pfFmhxSxsVdH1KEMpBwQRu4NLlb2QXR01Fct/wtTwV/wBDfoP/AIM4P/iq0tF8XaF4lklj0jWtO1WSIBpFsruOYoD0JCk4FHLJatBdGvRWJrHjbw74duha6rr+l6ZclQ4hvLyOJypyAdrMDjg8+1Uf+FqeCv8Aob9B/wDBnB/8VRyyeyC6Opoqjo+uab4gtPtWl6ha6la7innWcyypuHUblJGeRVbxF4w0HwjCkuu63p2ixOrMr6jdx26sFALEFyMgZGfTIpWd7WC6tc16K8//AOGhfhYP+al+D/8AwfWv/wAcqp/w0x8Jv+ikeGP/AAaw/wDxVa+xq/yv7iPaQ/mR6XRXEaB8cPh34quha6P468O6ldt0t7fVIHlPTkIGyRyOcV22c8jkVnKMou0lYtSUtUxaKiurqCxtZrm5mjt7aFGklmlYKiKBksxPAAAySa4T/hoT4Wf9FL8H/wDg+tf/AI5TjCU/hVxOUY7s9Aorz/8A4aE+Fn/RS/B//g+tf/jlH/DQnws/6KX4P/8AB9a//HKv2NX+V/cT7SH8yPQKK8//AOGhPhZ/0Uvwf/4PrX/45Xa6Tq9jr2m22o6Ze2+o6fcoJILq0lWWKVT0ZXUkMPcGolTnHWSsUpRlsy3RWL4o8aeHvA9lFeeI9e0zw/aSyeVHcapeR20bvgnaGdgCcAnHXANcz/w0J8LP+il+D/8AwfWv/wAcpxpzkrxi2JzjHRs9Aorz/wD4aE+Fn/RS/B//AIPrX/45R/w0J8LP+il+D/8AwfWv/wAcqvY1f5X9wvaQ/mR6BRXDWPx3+Gmp3tvZ2fxD8KXd3cSLFDbwa3bPJI7HCqqh8kkkAAckmun1rxJpHhuGOXV9UstKikbaj3twkKscZwCxGTUOE4uzRSlGWqZpUVy3/C1PBX/Q36D/AODOD/4qj/hangr/AKG/Qf8AwZwf/FUckuw+ZdzqaKZHIk0aSRuskbgMrKcgg9CD6U+oGFFYus+NfD3h26W21bXtM0u5ZBIsN5eRwuVJIDAMwOMg8+xqh/wtTwV/0N+g/wDgzg/+KquWT2Qro6miorW6gvrWG5tpo7i2mRZIpomDI6kZDKRwQQcgipakYUVieKvG/h7wNYi98Ra7p2hWhOBNqN0kCk+gLEZPsK84k/bB+DMd0ID8QdJL5Aypcpz/ALQXb39eK1jSqVFeEW/kRKpCOknY9iormfBvxN8JfEOF5PDHiXSteCDLrp93HKyf7yqcr+IFdNUSi4u0lZlJpq6CimSSJDG8kjrHGgLMzHAAHUk+lcz/AMLU8Ff9DfoP/gzg/wDiqFFvZBdLc6miuW/4Wp4K/wChv0H/AMGcH/xVa+i+JNI8SQyS6RqllqsUbbXeyuEmVTjOCVJwaHGS1aC6NKiq99f22l2ct3e3ENpawruknncIiD1LHgD61z3/AAtTwV/0N+g/+DOD/wCKoUW9kF0jqaK5b/hangr/AKG/Qf8AwZwf/FVt6Prmm+ILT7VpeoWupWu4p51nMsqbh1G5SRnkUOMlugumXqK5/UviD4W0e9ls7/xLo9jdxECS3ub+KORMjIypYEcEH8arf8LU8Ff9DfoP/gzg/wDiqfLLsHMjqaK5b/hangr/AKG/Qf8AwZwf/FUf8LU8Ff8AQ36D/wCDOD/4qjkl2DmXc6miuZh+J3g64mSKLxZocssjBURNShLMScAAbuTW9fX9tpdnLd3txDaWsK7pJ53CIg9Sx4A+tJxa3QXRYorlv+FqeCv+hv0H/wAGcH/xVH/C1PBX/Q36D/4M4P8A4qnyS7BzLudTRXLf8LU8Ff8AQ36D/wCDOD/4qj/hangr/ob9B/8ABnB/8VRyS7BzLudTRUVrdQX1rDc200dxbTIskU0TBkdSMhlI4IIOQRUtQMKKRmCqSTgDkk1534j/AGi/hf4TupbbVfHvh+2uoTiS3F/HJKhxnDIpJB9iKuMJTdoq5MpKOsnY9ForyGw/a6+DepSFIviHoyEED/SJWhHPu4Ar0nw74r0Xxhp632havY61ZN0uNPuUnj/76UkVUqVSn8cWvkKM4y+F3NWis3WvEmkeG4Y5dX1Sy0qKRtqPe3CQqxxnALEZNZH/AAtTwV/0N+g/+DOD/wCKqFGT2RV0dTRXLf8AC1PBX/Q36D/4M4P/AIqj/hangr/ob9B/8GcH/wAVT5Jdg5l3Oporlv8Ahangr/ob9B/8GcH/AMVW5pOtafr1mLvTL621G0YlRPaTLKhI6jcpIyKTi1ugumXaKKKkYUVj6l4x0DR7prW/1zTbG5UAtDc3ccbgEZGQSDTLPxv4d1G4S3tNf0u6nc4WKG8jdm+gDZNAG3RRWH4k8deHPB4T+3dd07SC/KLe3SRM/wBAxBP4UAblFYvhzxr4f8YRu+ha3p+sLH9/7DcpKU/3gpOPx9au6prWn6HbrPqV/bafAzbFlupliUsQTtBYgZwDx7GgC7RXPf8ACxPCn/Qz6N/4MIv/AIqtDS/EWla5HLJp2p2eoRw/6xrW4SQJn1Kk46HrQBo0Vz3/AAsTwp/0M+jf+DCL/wCKrV03WLDWoPP0+9t7+HOPMtpVkXP1UmgC5RTJZkgjeSR1jjUbmdjgADuTXIf8Lm8A/bPsv/CaaB5+7bt/tKHr6Z3YzQB2VFMimSeNJI3WSNhuV1OQQe4NNurqGxt5Li5mjt4IxueWVgqqPUk8AUAS0Vx1r8Y/Ad5fCzg8ZaDLcsdqxrqMRLH0Hzcn6V2AYMAQcg9DQAtFZ2ueItK8M2f2vWNTs9Ktc4869nSFM+mWIFZOgfE7wh4qvBaaP4n0nUro9Le2vY3kP0UHJoA6eioby8t9PtZLm6njtreMbnmmcIij1JPAFPhmjuIUlidZYpFDI6EFWBGQQR1FAD6Kqalq1jotqbnULy3sbcEKZrmVY0yegyxAzS3WqWVlbR3FxdwQW8hVUmllVUYt90Ak4JPb1oAtUV5x4s1P4keHfFdzcaFodl4u8P3UMYhs3vksZrKUcOSzKfMRuD6jt77Pg/UtV0Tw3p6+OtW0yPxBeSv8kTrFHlm+SGPON5UFRnqT60AddRRXJap8W/BGiXzWd/4u0S0u1O14Zr+JXQ+jDd8v40AdbRVXTNVstas47zT7y3v7SQZS4tZVkjb6MpINKupWcmoSWK3UDXsaCR7YSAyKp4DFc5A96ALNFIzBVLMQFAySegrLj8VaLNpcupR6xYPp0TbJLxblDCjcDBfOAfmXjPcetAGrRSKwZQykFSMgjoap6prWn6HbrPqV9bafAzbBJdTLEpbBOMsQM8H8qALtFVr7U7PS1ha8u4LRZpFhiM8ioHkOcIuTyxwcAc8V554m1b4n+HvFGonR9A0/xboV2qGyD3yWUlgwXDiTKnzVLcjHPOKAPTKK5XwrqF9oHh/RrPxprmnSeJrrIcxskKSyFuI4lOC23cq9Mk898V1VABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB5/wDFDXtd8NzWF3a38enaCwaO6u1tBPJDL/yzLbmCiNvulsfKSMnByPlLxjdSXV9fXMB8zbJ50tpNpxh8hm5ZkAaRAjckjdtOcgdMfVnxY8T6t4ft7WGC3s4dGuw8V5ql5CbhICRwrRAqMN03M20E/NjrXyhrOjz21wr2V5d2kqyEwC6WK0hHOWaGXzioUk9EJ7c9DX53xFKTm4xu/wBNFtrr9299+n2GUJKHM7L9fXT9f+Dk6bdWy3AvLSzkt40jkj1CMykwiKQCPKH7w++eDuwQp56CleeRHJLZRas9za27ubaba4icEcnYRlCQOeDk8dOa21luo7y6m1947+KGyxIttLFI1wrMAuZY89Hwd7EkFQO4B56GGaa3ZYY4ZI2bCxlozNkkAAfxk5xwB+GK+EqXjFRt36Wf3LZO3rddmfSx1d/1/r+mdB4B8d6r8M9Yt9Y0uTzLeb5Li2dvkmA+8jeh5yD2yPcV9seBfHGmfELw9Dq+lyFomOySJvvwyAAlGHqMj6gg96+FNe8QXl3K8C3LR2eVb7HG/wC5hdRj5FHyjBzgr2brya+jv2fdL1PwH8OfE3ivVYmWG6iOoQ2vClo443cuB23549lB6Yr6/hzGVKOIlhotulZt6fDbqvJ9vM8DOMPCpSVZ6T0S8/I97mmjt4nlldYokBZnc4CgdST2FfHWofE2xj1yO/0+33Tab4guLiGMISZLB9xdSD2wGz6AqOi12PxF8feH9aX+19Onkk8Qui215oN3bS3MEbqQC7FGAQrjh1LZwMDPI85tRpum5n0tL231KGCZzdzWr/vZA5ZVUEkjfhRyeEDAkl+PRzbHyxE4woSSUdb3u3qrW7NWvZ/M5svwipRcqid3029fl5mRpa3Om2F7BazS22n6gZUu4+V8+2jUTx492COM++O9afhPxRp+mQ6Dpd7FtsrRL+9v48+W0tz5MqxIT2YBUAPYyGti91uKK9s4rS3klskPl2jzRMTaxIkkaiQEHem2Qy7epLOuKbqFlpuuXUS6hNILOS8imuhHG28TOd9xKpA5U7vLyBzsRuikV87GhKm06MleOmu26l8k2vxd92exKakrTjo/v6r7/wDI+j/gfqVrrHw00q8t2VpZt7XO0YxNvO8Y7DPQdl244xXeV8lfDEWunrbaXb+I5/C/2oedJqVxcPDn9448kR4WMSbVXmRm5Y7cjivd5vFEfjrwR4ptfC08811bW8lpbXRJHnuYvleNz94Fsru9VJz3r9Ay3H+0w0VJe8o7J7tLWy3/AE13Z8ljMK4Vm09G+212eWfHf9oMqbnwz4VnJkJ8q71KFunYxxEd+xb8B61882Ynsnk/eW6JG6l/OAZWZeQuMEsM9QAV6Z4wadbahdaRfIq28MN1b7odlxCp2OSQxZX43DpkjjHYgYfq0tkl+5jswv7uP5FkIj8zYPMIxnK7s4wwGAO1fleOx1XMKrxFWWqdktbJdv8AP+rfbYbCwwsPZU18+/8AXQ07xpmsQ17Jb29/q06zvdLGEWGLDghvLXjeWyVAz+7BxyKgsYYZZfsFmt1q0asHZFJigkYdCRnKqOcscEj+51punRxQ+F724gc3Ezukd7b/AHTHBvVgQechnCgt/CQBzup1vM2qSN9j0aztLRc72+YqOnLSSMWGBydhX1rJPmlFvqvNvr6rzd/TpY12T/4Zf5+n3n0b8LfGVr4T0ezRNIk1O71K7jtLi6sb21mYyFTsjWNJCFjRBwoPyrknHNe8185/BLUtG8KtY3Gq2by397P9gs9Ss5Irm0iZsHyY0iJaInILFlyepODX0ZX69k83LDK72tp1Xrot9/1PgMxio1nZfPv/AMMFFFFe4eWfBH7SX7ANobP4ifEqz8ZTLdg6h4il0+exBRh+8naJXDgg9gxB+lfn2IZGhaUIxiVgrPg7QSCQCfU7T+R9K/an9qS8+xfs6fEaTGd2h3UfXH30K/8As1fmL8Afh2PiD8K/jUEBa80zRINQtwFzzFP5r49ykbr/AMCr7fLMZUeHlOs7pNL77I+axuHh7ZRpq102fo/+xr8Sv+Fnfs8+Fr6WbztQ0+H+yrzLbm8yDCKWPq0fltz/AHq9tr84/wDgl/8AEr+zfGHifwPcykQ6nbrqVorY2iaI7ZAO+WR1P0i/P9HK+ZzCh9XxM4LbdfM9nCVfa0Yy6hX5a/8ABRD4hTfET4+WnhPTd11D4fhSxjijGS93MVaQD1P+qT6oa/S3x14vsvAHgvXPEmonFlpVnLeSjOCwRS20e5IwPcivyy/ZL8MX/wAZvjz4g8Waqv2ptPsr/XLt9uVa5kV1jAznB8yTeP8ArnXflMVT9pipbQWnq/6/E5sc3PloL7T/AAPPP2cfgfJ+0F8TIfCaauuiI1tLdSXbQeeQqYyAm5ck7h3FfqH+zN+zNZfs16XrtlZa7ca4uqzRTM1xbrEYyisMDBOc7v0r8/f+Ceupix/ai8PwFmU3tpeQAL0OLd5MH2/d/mBX62V0Z3Xqqr7G/utJ2MctpQdP2lveuedfHz4N23x4+HF14Ru9Tl0iG4nimN1DEJGHltuAwSOtfmd+1p+yU/7NL6Fd22v/ANvaXqzSxoZbcQywSRhCQQGIYHcSCMYxgjuf12r4X/4Kof8AIo+AP+v66/8ARaVy5TiasK8aKfutvT5G+PowlSlUa1R8w/Af9jfxp+0N4QvPEfhzU9BsrG1vn0949UuJ45DIscchICQuNuJV75yDx6+j/wDDr/4p/wDQf8H/APgZdf8AyNX0B/wS/wD+SBa//wBjNcf+ktpX1/XXjM1xNHETpwasn2OfD4GjUpRnLdn4k/HT4B+J/wBnvxTbaF4maynmurYXUF1p0jSQSIWKkAsqnIKnIIHbsRX7bV4B+0x+yPp/7SmraHfX3iO60M6XBJCqW9ssvmb2DEklhjGK9/rz8fjVjKVK/wASvf8AA68Lhnh5zt8LtY+R/wBoT9gO1+Nfj7xH41t/F02matqUcRis5LMPArxQRxKGYMGw3ljJxxnocYP5seJfCF94C8Z3fh7xPaXGn3mn3PkXsKqPMUAjJTPByp3KehBB6Gv3fr5i/bU/ZTi+Onhg+IPD9uieOdKhIhwQv2+EZPkMf7w5KE9yQeDkdmW5pKnJUq793ZeX/AOfGYGM06lJe9v6no37K+g+H/DPwD8J6f4W1xvEWhJFLNb6hJGI3cSzySsrICdrK0hUjqCvNfKH7QP/AATzg0fw1428eaZ4ykmu7VLvW5bG6sgsbooeZ0V1fIOM4JByQAcZyPKv2Lf2n7r4C+NJPC3ieSSLwfqVx5dyk4IbTbnO3zcHouRtdfYHquD+jHx/mS4/Z9+JEsTrJG/hfUmV0OQwNpIQQe4qKixGX4v3ZaTe/fUqDo4vD6r4Vt2PyG+Avweu/jt8T9L8H2moR6UbtZJJb2SPzBDGiFyQmRuPGAMjk9RX6e/sz/sj6f8As16trl9Y+I7rXDqkEcLJcWyxeXsYsCCGOc5r4X/4J3/8nPaN/wBeN5/6JNfoz+0N8dtH/Z++Hd34h1Lbc3z5h07Tt2Gu7gjhfZR1ZuwHckA9eb1q866wtN6NLTvqYZfTpRpOvPddT4y/4KceH/DFv400fWW12aTxbc2MdsuixRKUitkeQ+dI+cjczlVGOdp9K8Y/ZZ/ZL1n9pDUb25e8bQfDFidk+qeT5pkl4IhjUkZbByTnCjHXIFUvhj8PPGX7Znxuu5725lkku5ftesauUzHZw5wAoPGcAIiZ7eikj9b/AAF4F0X4Z+EdM8NeHrNbHSdPiEUUa9T3Z2P8TMSWLdySa0xGKlluHjhoSvU/L+un3kUaCxlZ1pK0fzOS/Z6+CFr+z98Pv+EVtNVm1iH7XLd/aZoRG2XCjbgE9Nv61zH7Tv7K9h+0x/wjX27X7nQ/7E+07Ps9usvm+d5Wc5IxjyR+de6UV8tHEVY1fbqXvdz3HShKHs2vdPxV/aS+BM/7PPxKk8LS6rHrML2sd7b3axGJmjcsoDJk4YFGHBIIwe+B7b8JP+CdOsfFDwDofip/Gtjpdtq1qt1FbrYvM6K3QMd6jP0ql/wUy/5OGsP+wBbf+jp6+8v2T/8Ak2/4d/8AYHh/lX1mKx1eng6VWEvelvojwaGFpTxNSnJaI+HPHv8AwTL8f+HdPlu/DutaX4q8pSxtAGtLh8dkDEoT9XFcP+z9+1l45/Zz8VRaHrkt9qHhe3n+y3+g6gWMtmFO1vJ38xumD8nCnBBAOGH651+ZH/BTjwXYaH8XdB16ziWG41vTj9rCjHmSQtsEh9yjIv0QVhgcc8fL6tikpJ7GuJwywsfbUHax+jF0NO+JHgWYWV6JtJ13TmWG8t+Q0M0RCuuf9lsivzo/ag/YN0z4H/DG68ZaJ4ou9RisZoY7izv4EBZZHCBkdcYILLwRyM88YP1l+wTrVzrX7LvhP7Uzu9q91aq7jGUS4k2AeoCkL/wGoP8AgoF/yav4q/672X/pVFXm4WpVwmM9hCWnNZ+etjsrxhiMP7WS1tdfcfnb+zj+zVrH7SOqa1Y6Rq1jpL6XDHNI16rkOHYgAbQfSvdv+HWvjX/ocdB/79z/APxNaH/BK/8A5HDx9/14Wv8A6Mev0Xr0cxzLE4fEyp05WSt0XY48Hg6NaipzWv8AwT8e/wBor9j3xV+znoemazqupadq+l31x9j86x3gxTbWdVYMo4KoxBB/hPTjP6Wfsn/8m3/Dv/sDw/yq1+0J8B9J/aI8D23hrV7+602C3vo7+O4swpcOqSJjDcYIkauo+Gvga3+GfgHQvCtpcy3lrpNqtrHPMAHdV6E44z9K83FY54vDQjUfvp/gdlDC/V60pQXutHH/ALRX7Pml/tGeFNO0LVtUvNKgsr0Xyy2aoWZhG6bTuBGMOfyr8zf2tP2aU/Zs8XaVY2mtNrWm6rbvcW7zQiOaLYwVkfBIbqCGGOp4GMn9iK/Oj/gqh/yOHgH/AK8Lr/0YldGT4iqq8aF/dd9PkZZhRg6Uqtve0PI/g9+wv49+NngHT/F+h6v4ctdNvXlSOLULm4SYGORo2yEgYdVOOeldp/w6/wDin/0H/B//AIGXX/yNX1p/wT9/5NX8K/8AXe9/9Kpa+i60xObYqlWnCLVk2tvMijl9CdOMnu0j8brf4Pa/8C/2oPBXhXxH9le+i1rTJ0nspC8M0bzxkMhZVbGQRyoOVP1r9L/2lv2cbP8AaS8O6RpF7rc+iR6fdtdLJbwLKXJQrggkY61hfFr9kfT/AIr/ABs8OfEW48RXOn3WjfZNljHbK6SeRO0oyxYEZLY6V7/XLjMwdZ0qsH78Vr6m+HwqpqcJL3Wz8Xv2nvgDJ+zj8RofDLawuuQXVimowXQg8lhG8kiBWXcfmBibkHByOnSvcP2fP+CesXxe+GGleMNY8Xy6SNVVpLeytLNZCkauyZdy4yW25wBwO57Uf+CoH/JfdA/7Fm3/APSq7r7X/Yz/AOTYfh//ANeLf+jpK9jFY2vTwNKrGXvS3Z59DDUpYqcGtEeuaPp40nSbKxVzILWBIQ5GN21QucfhWf428ZaX8PfCOreJNauPs2l6ZbtcTyYydoHQDuxOAB3JArcr85v+CjHx8l8UeJrT4V+HpXntbGVJdVFvljcXR/1cAA67AQSO7MB1SvmcHhpYusqfTr6HtYissPTc/uPlD4xfEvWPjH8QNX8Zaurq2ozsII8kxwRoAEhQ/wCwpXPucn71fQ37M37Bkfx0+G0HjHVPFkmj215NLFa2lraCVtsblGZ2ZhjLK2FA6AHPOBzf7V3waX4G/C/4O+H5UVdWmt9Qv9UYd7qQ224Z77AFQHuEBr7b/wCCfv8Ayav4V/673v8A6VS19XjMW6eCjUwzsr2Xor/5Hg4fDqeJlCtq7X+bt/me3eA/CsfgXwP4d8NRXDXcWjadb6clw6hWlEMSxhiB0J25x7182ftmftmJ8Eom8JeEmhuvG9xGHmndQ8WmRsMqzKeGlI5VTwAQzZBAb6E+K/j+2+Fvw38R+LLtRJHpNlJcLExwJZAMRx57bnKr+NfkJ8JfBGs/tPfHqz0/ULuSa61q9kvdVvv4khBLzOOwOMqo6ZKjpXiZbhYV5TxGI+GOvqz08ZWlSUaNL4pHRfDL9n/4rfta67ca+881zaySFbjxHrs7+VnPKJwWcjJwqDaOhK174v8AwSpvfse4/EqAXeP9UNFby8/7/n5/8dr728N+G9N8H6Bp+iaPZx2Gl2EK29vbxDCoijAHufUnknJNadFXOMRKX7n3Y9FZBTy6il+895n46/GL9mL4l/sw39vrs7t9gjmxbeItCuHUROchQxG14mI9eMnAY19YfsW/tt3XxC1K28B+P7mNtekG3TNYYBPtrDnyZQBgSYHytxu6fexu+ytf0HT/ABRot9pGrWkV/pt7C0FxbTLuSRGGCCK/GT9oD4U337PPxo1PQbe4mSKzmS90q9DbZGgY7onBH8SkFSePmQkV6OHrQzem6NdWmtn/AF+KOOrTll8lUpP3Xuj9n9Y08atpN7Ys5jF1A8JcDO3cpXOPxr80P2kv2A4fgl8L9Q8aaX4uk1aHTXhFzZ3dmImZZJUiVkZWPIZ1yCOmeeMH71/Z5+KI+Mnwb8M+K22i7u7bZeKowFuIyY5cDsC6kj2Irhf29f8Ak0/xz/24/wDpfb14+BrVsLiVRTteSTXzsehiqdOtRdRq9k2vuPzm/Zb/AGdJ/wBpHx1eaKNXXQ7GwtPtlzdeT5zld6qERdw5O48k4GO/Q/pv+zT+zjZ/s2+HdX0iy1ufW49Qu1umkuIFiKEIFwACc9K+Ov8Aglr/AMlP8Y/9gdf/AEelfpPXbnOJqutKhf3dNDny6jD2Sq297U5b4oeBYvid8Pdf8Kz3b2EOrWj2r3MaB2jDdwCRmvzW/an/AGHx+z54JtvFWm+KG1uwa6Szntrm1EMiM4Yq6sGIYfLjGAR1ye36pV8r/wDBST/k28/9hi1/lJXHlmJq0q8KcH7smro6MbRhUpSnJapHxP8Asl/ssN+0zq3iBZte/sLTtFSAzvHb+dLK03mbFUFgAP3TEk57DHOR+mf7PXwQtf2fvh9/witpqs2sQ/a5bv7TNCI2y4UbcAnpt/Wvk3/glL/zVH/uF/8At5X3/XRnGIqyxEqDfuq2ny/4Jjl9GCpRqpe87/mfkr+1F4F1f4mftteJvC+hQrPqup3ttDArttUf6JEWZj2VVBYn0B611f8Aw6/+Kf8A0H/B4/7fLr/5Gr7Eg/ZN02H9ps/GRtfuJL0yNJ/ZLWy+Vk2htx8+7PAO7p1Fe91pUzedOFOnh3ooq+nUmOXxnKcqq3bt6H4RfEHwTffDfxtrXhfU5befUNJuWtZ5LRmaJmXqVLKpI+oFfT3/AA6/+Kf/AEH/AAf/AOBl1/8AI1eL/tXf8nIfET/sMT/zr9p69PMMwr4elRnT3ktfw/zOHC4WlWnUjL7L/wAz8Zta+CniP4CftA+EfDPib7K961/Y3cU1jIZIZomuAoZSyqfvIw5AOVNfrh8UPAsXxO+Huv8AhWe7ewh1a0e1e5jQO0YbuASM15l8cP2U9P8AjZ8SvCvjC51+40q40ERBLeG2WQTbJvNG5iwI5OK92rwcbjvrKpTT95b+p62Gw3seeP2XsflX+1T+xD/wz34Ks/FOm+Jn12we7SyuLe4tRDJEzq5WQMHIZflC4xkEg8jOPNf2ff2X/FX7SP8Ab3/CM3+j2P8AYv2f7R/a00se7zvM27PLifOPKbOcdR17fe3/AAUk/wCTbz/2GLX+UleUf8Epf+ao/wDcL/8Abyvco46v/Z067d5J2/Ff5nl1MLS+uRpJaNf5nn//AA6/+Kf/AEH/AAf/AOBl1/8AI1eP/H79l3xh+zkdHbxLNpl7b6p5ggudKmkkjDJt3I2+NCDhgRxg888V+z9eO/tLfs42f7SXh3SNIvdbn0SPT7trpZLeBZS5KFcEEjHWuDD51W9qvbtcvXQ6q2W0+R+zWp0X7Pf/ACQL4af9izpn/pLHUvxm+M3hz4F+CbnxL4jnZYUIjt7SHBnupT0jjUkZPUnsACT0re8B+FY/Avgfw74aiuGu4tG06305Lh1CtKIYljDEDoTtzj3r8n/20PjRe/Gz43aja2csk+haLO2l6XbRgkOyttklAHUyODg9doQdq4cHhVjsS19ndnViK/1Wiu+wnxQ/aP8Air+1V4oTQrAXqWN45jtfDGh7yjKf+euOZSB1Z/lHJAUZr0XwN/wTJ+IOvWcdz4j1vSfC4kVWFsu68nQnqHC4QY9nNfYf7JP7NunfAH4e2puLaKXxhqUSzapfFQXQkAi3Q9kTgf7TAt6Ae7V2V81dF+ywaUYrr3OengfafvMS22z869Q/4JW63Has1j8QdPubjHyx3GmvCh+rCRyPyrgv2EdF1Hwb+18fD98TDe2Eeo2N5FG5KmSJWVh7gMv6V+qNeF+Ff2T9E8K/tAal8V4dbv59UvpbiR7CRE8hfNUqQCBu4z61nDNKlSlUp4iV7rTTr8i5YGEKkJ0Vaz1PG/8AgqV/yTLwb/2GH/8ARLV85fDf/gn38S/ib4J0nxRZX/h7TbHU4RcW8Oo3cyzGNuVYiOFwARgjnODX6B/tLfs42f7SXh3SNIvdbn0SPT7trpZLeBZS5KFcEEjHWvRfAfhWPwL4H8O+GorhruLRtOt9OS4dQrSiGJYwxA6E7c496VHMnhcLGnRfvXd9OgVMGq1eU6m1j8h/j9+yj4t/Zy07R73xLqOi30WqSyQwrpU80jKUAJ3b4kwPmHTNX/gP+xv40/aG8IXniPw5qeg2Vja3z6e8eqXE8chkWOOQkBIXG3Eq985B49fp7/gqh/yKPgD/AK/rr/0WldT/AMEv/wDkgWv/APYzXH/pLaV7Dx9f+z1iftX/AFPOWFpfW3R6WPkT40fsPfEL4HeCJ/Fes3eh6lpNvLHHcHSrmV3h3sEVmEkSfKWKrwScsOK+4v8Agnb/AMmx6P8A9f8Aef8Ao017J8ZPhla/GT4aa54OvbprK31SNEa4SMSNGUkSRWCkjJBQVnfAP4N23wH+HFr4RtNTl1eG3nlmF1NEI2PmNuIwCeleLiMweLwnJVfv834WPTo4RYevzQ+G343PRaKKK8I9M+dj4d8KeIf2mvHUfiqy0u9hj0yxaBdUVGVWK8ld3fGOlavxI+HvwUs/BmqzXll4d0tUt5GjuLFoop1cKSvl7SCzZxhecnsazofAXh7x5+0148h8Q6RbatFb6ZYPElym4IxXBIrtdW/Zz+GMmm3Hm+GbDTkVCxvLcmB4Mc7w4Pykdc9OOaQzn9N+IGsfDv8AZRsvE2sCV9ctdKQR/awS7SO4jgLg8nhoyc84zmrvwx/Z50DTdIg1bxdp8PirxffotxqF9rCC5IkYZ2Ir5VQucZAzx9APPrO1174ufsa6pbzXU+s6pC0v2a6kBaW6jt7gMvuzFEKg9ScZyc1738NfH+m/Ezwbp2u6ZcJKlxEvnRqRuglwN8bDsQf6EcEUAef/ABQ/Z/sZrNNf+H1hbeGfG2nSLPZzacq20c+CN0cqjCkMM8kfXgkVV/aMgGseHPhdDrdnCouvF+lpfWchDxjckokjPYryR6EV2/xm+KVt8KfBs+ohY7rV5iINN045L3U7EAKFHJAzk47e5FcF+0NYy+I/CHwrsvEVpCZr/wAWaVDqNpGT5eXjlEsYOc7eWGc0Adr/AMKd+F3/AEKnhv8A8BYf8K3NH8H+G/Cei6mvhzStP0yG4jYy/wBnxKiuwU4zt6kZP51yv/DMHwu/6E+z/wC/sv8A8XXW6H4J0TwD4VvNL0DT49NsNskvkxsxG8ryfmJPYUCPGP2YfhP4M8TfA3w1qWreFtJ1HUJvtPm3NzaI8j7bmVRliMnAAH0FSeNPBuh/Cf4wfDi88HWyaFe61fvY39hZMViurbaCzNFnHyE5yAAMjPQVhfs4/BPT/F3wZ8PatP4k8UWEtx9ozb6dq7wQJtuZV+VAMDO3J9SSe9exeCPgR4U8C64dctorzU9c2GNdS1a7e5mRTnIUscDgkZAzgnnk0hnD+MdLf45fGy+8F39xPH4N8L2sNxqVnBI0f265mG+NHII+QLg8dwe5yPRT8Evh+dP+xf8ACF6F9nxj/kHxbumM79u7PvnNcFo+pW/w5/ab8UWuqOLO18a2lpc6dcScRvPApjaHcf4zuLY9wO4z7nTA8F8E6dL8D/jVa+B7O6mm8G+JbWe80uzncubG5iy0saMcnYVBPJ6kd8lodQ0AftAfGbxBpmtSzv4I8ImG3GmRyFI768ddzNIVOSE6Y+nTLA3dR1eP4hftQeGrfSZBdWfguxvJ9QuYiGjSa4TyhDuH8QABx7MOxpfh7q0HgH49+PPC2qOto/iKeLWdJkkOBdbkIlRSf4gw4HX5WoA7q8+Bvw9vtNawk8F6GtuQR+6sY43GQASHUBgeByDngVhfCHwjr3wrbxPouo3DXfgyzkW40O6mmDyxQlSZIWGchUwAM+574HqbyLGjO7BEUZLMcAD1ry/wN8SJ/jBrfjewsIYP+ERsf+Jda6tHktdTshEu05wVXPBA5DKc80COJ+D/AMP7P42Ry/Ezx3arrU2pTSDStLvPntrG1VyqgRngsSpyTkHg9Sa7zxr+zv4H8XaPLbQ6DY6FqCqDa6lpVslvPbyKBsYFAMgYHB4wO3WsL9lfxBGvw+XwdelLXxL4Zmmsr6xY4cASsUkAPVSGA3dCQfUV6p4o8UaZ4M0G81nWLuOy0+0QvLLIfyAHdieABySQKBnj/i6HxTZ/sp+ILXxkEPiC20yWCaaOUSCZVbCSEjuVxnvnJ716h4DuIrP4b+HZ55Fhgi0m3eSSQgKqiFSSSegAryrxR4x1f4gfsq+J/EGsabHpUl9Yzy21tHnIt92I2bJ6sBn0wRWPDqN18b7Lw58PNFneLwvp2nWb+J9TgbHmfu1K2UbD+I4+bHQAjsQQDlPjVJe/G7wJ4q8bTNNa+CtDi8vQLbJT7dP5ipJduP7oBZUB9T05z6f8bf8AkjPhX/sI6R/6MjrU/aO0+20j9nbxPY2UEdraW9lFFDDGuFRFkjAUD0ArL+Nxx8GPCxPA/tHSP/RkdAHrniPxFp/hPQr7WNVuUs9Os4jLNM/QKPT1JOAAOSSAOtfK/jTStW8ct4V+JviKOayN54k0220LSXYj7JYtNne4HBkkwrH0GPYD0P8A5OQ8cYBMnwz8O3PP9zWb1P8A0KFD+DH1zxt/tIceH/B4H/Q16Z/6MNAFX49apqviDxB4R+HGj30ulnxJJNJqN9bnEsVnEoZ1U9i/Iz7Y6Guo0P4C/D3w/paWNv4P0eaIIEaS8s47iWQcH5ncEnkA9etcd8ar5fAvxa+HHje++TQYWudJvrhvu2xmT927ei5zknoB717ZDMlxEksTrJG6hldDkMDyCD3FAHj2j/CG++GPxWsNT8DxC28H6osia3pHnYihkC/u5olY8HPBA6AEDg8VtPvrbTP2pPF93eTx2trB4Xt5JZ5nCJGolyWZjwAB3NdF4h+LUsfxa0DwN4fgt9Tu5Q9xrMjEkWFuoBXODgO2eh9V4+YV5p4p+Gtn8Tv2ptW0/Vbu5TR7fQ7a5urGCQot7iT5Y5CD9wNhseqjp1oA159a1j9pu+uNO0O4uND+GVvIYb3VEylzq7DIaKH+7F6kjJ/Nau/tMeHdN8J/sweIdJ0izisNPtUtEighXCqPtcP5k9STyTyaztdsn/Zk8ZN4h0yBv+Faa1Mqarp8CZXSrg4VbiNR0Q8AgfT+4Bu/tYXUN9+zf4mubaVJ7eZLOSOWNgyupuoCGBHUEHOaAPVE1G20jw6l9ezx2tpb2olmmkOFRFXJYn0Ar4/+PX9p/Fz4b698RtQ8+x8N2UkVt4a05sqZUadFkvJB6uMhQeg/At6rql3L+0B4mi8H6fIw8B6H5Z1+9iYgX9woBWzRh/CpALkfTjgm9+17bxWf7POswQRrDBE9okccagKqieMAADoAKGBJ+1F/yDPh1/2Omnf+gy16l4w8XaZ4F8N3+u6xcC20+zj8yRz1PYKo7sSQAO5Iryv9qiZINH+HssrrHGnjPT2Z2OAoCzEknsKq6NG/7RnjmPXblWPw58O3JGmW7j5dWvFyDcEd405C+pz/ALQoA818YeH9b1rxR8NviJ4pEtrq2seLtOgsdKZjt0+x3lkQj++xAZif05FfYNeKftJf8hP4T/8AY6af/wChGva6ACiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA4z4sSa/F4TdvD6O8nmqLsW8ayXH2b/lp5Kt8pfHQHtnHOK+Qdfj0ayupoYAsGnF9ryQSyveN14kjkaMZ65wmBn6Z+4Ne1+y8N6dJeX06QxqG2KzqpkYKzbF3EAsQpwPavkLxR4i8Na/rX2u6tpLL+0rz7VcHSLkSeZGzkIsqvkI4ALlQCO2Bu+X4biKlCTjJzV+z/AE7Xvr3R9Tk85JNcrt3X69/I4WxvtJ03Xraexa6WBI3Be9VSDIVYLuVc5TcV3LzkZ4OcVCLO40nUp4Xtn/tS2k3+ZDOvlwkYIJ2jAwf9oAdCOKt+IFuJI7qG71a3aGwmaG2tY0Cb2DAOyxoNqDjO5sZwOvaaZIvFdle6jFp1x/aRu43uo7Pc6FGEhd1TBKnI7nAzxgHFfnnK23BaNapfLXT3uyt9/U+rvpzPbb/Lt31MrU7F7iTfbWMi+XbrcXDxodvzANuwBhFG4KO354r6T8C/tLeF5vBtvp/iZJre8htxbTRrAZI7hQu3Ix0yOoOB1r52uJ5NNOowXcEltC3+iGxjl2lCpDHJwRlWVd2RyWPTtCI7FZpZrqDISEo1nBlTG2wIshbnOCVYjglgVwAc124PHVsvqynh2ve3TWnX02+99jmxGFp4uCjVvps1/X/APoX9nHUNI1L4ieMLrQ4Lq20ySCJo0vZA8n3jkkj39ST6kmrPj3496ZonxS0eTTL2bUdNsoZ4NUjtApSTIyoViQGKlc5zjqM8msX9lCCCPX9egTEo+wxb2ZCofc7MOD/skD+WRgnO8Rfs338fiLUbnTte05NNtG8x1abdcxRgbhujVVUHgALkDgV9ZSq47+y6LwsU25Nu3S0r6dLd+ljw5ww312oq70UUlf0sbXw/+MfjX4gfEBDayAaBHcbrmCO2TyobfDHLuRv3YB5BxkD+9XW2f7T3hy58ZtpEkTW+mfdXVpJQE3dPmQjhc8bgT64AyR8x6XNPZrrV0l7epBcQG3cWr4eVJAWAkB6phPm+nXvUOieG9Q1+4mn0gNqN/AyTJa28RaRxk7iEXptIHHTB/CvKo53jqcIxg3KTbbvrddkui06ddjuqZbhptykrJJJW0+b7s+of2qHWT4VxurBka/hIZeQRtfkVD8KPHnw48FeCVW18RxhsCS4F4pjm3YxtEQzwPRd3JJySSTY/aWlSb4YWEl5G0cbahbNNHnDKCG3D69a+Tf7Jh2PGLuI3MbZZt48nbjs3dhg8DOe2TxXqZtj6mX5k6tKCk3FLXpvtr1ODA4WGLwSpzk0lJ7fI1viN4otPG3xA1XWoYXs7G7nG0BAXCKqruxkDcQNxGep696qX1wNPkNj9qmt/sm6OOW2TJmBJbLHeMDOPl5Aye+SUt9QNnpeo2lqJFaSZJ5Le4iR1VE3gfeyS3zjoBwG7UtvGurXF6tzdzW9ssb3bqIRIUbcMgAlQCSeoIzwK+GlKVSUp3vObu+m7b7ryfSx9NGKhFRXwx0/IfcRGx0PT4zH/AGZdXUzrcSylt0kYKMjkYLBASeg+YoDyV421+3310xvfETeIGxlPIVtQcep8qZkz26gnkdKxHlOoahLqNrp/9p2VjBHHLHdk5ZBH5Yd1RgwHy9VOF+XJOcnY8N2Om31wSssWmWs4/fRzan5EsQ7PGWCq45+6d2cHkE5rpormnyrbZatXS0vppv8AO9/UzqaRu9/l/wAOe5/A6OCx8Wf2fqNodS1dbQz2+o4ZTZxE48l7dgBbMc9FGGBr3yvMf2fIbe38DyQwafDbG3ung+3wQGJNRVcbbgbgCQQcfUGvTq/Xsrp+zwkPPX+n19ep+f4+fNiJeWn9dvQKKKK9Y888I/bm1I6X+yv46kUKWkitoArHrvuoUOPcBifwr5l/4Ja6bBqGo/EwXEImia0soHDZ2lHM+5T9dv6V7z/wUSvxZ/sxaxEW2m6v7OEDGc4lD49vufpXkn/BKnT/AC9I+JF95mfOnsIfL29NiznOffzP096+jo+7lVV95f8AyJ49TXHQXZf5nyrpdxd/sv8A7UUbSCRF8Ma60cmRuaW03FWIx/fgckf71fsxbXEV5bxTwSLLDKgeORDlWUjIIPoRX5pf8FNvhr/YHxS0TxjbQ7bbX7PyLhlTj7TBhcs3qY2jAz/zzP4fW/7D3xG/4WN+zn4beaUS3+jhtHueckGHAjz7mIxH8avMv9pw1LFrfZ/163Fg/wBzWqUH6r+vuPN/+Cl3xO/4Rj4S6Z4QtpSl54ku90yrn/j1gKu30zIYfqA1Rf8ABOH4WvoPwR1vxNNCEvvFFw6QMwx/o0IaNPpmQzfUAV8wftpeLbv41ftUXWg6QRdixng8OWEascPNvw49j50jr9FFfqT4C8H2fw/8E6F4a08f6HpNlFZxserBFC7j7kgk+5NRif8AZcBToreer/r7vuKo/v8AFTqdI6L+vvPyR/Yiu/sf7U3gKQsy7riePK/7dtKuP/Hq/Yyvxo/Z/MfhL9rPwjbjfax2/iZLFVOSV3TGIKe/8QH41+y9PPNa8Jd4/qxZZpSlHzCvhf8A4Kof8ij4A/6/rr/0WlfdFfC//BVD/kUfAH/X9df+i0rz8r/3yn/XRnVjf93mef8A7FP7W3gP4C/CvVfD/ig6mNQudalv0+xWolTy2ggQZO4c5jbj6V9Af8PJPg/669/4Lx/8XXzh+xv+xv4L/aG+GOp+I/Eep69ZX1rrEunpHpdxBHGY1ggkBIeFzuzK3fGAOPX3j/h1/wDCz/oP+MP/AAMtf/kavYxkcu9vP2rlzX1scGHeM9lH2aVj6202+j1TT7W8h3eTcRLMm4YO1gCM++DVmq2mWEelabaWUJZoraJIUZyCxVVAGcd+Ks18p6HuhRRVDXtcsPDGi3+r6pdR2Wm2MD3FzcSnCxxqCWY/QCjfRAfnz/wUq+C/hrw1faV4+026t9O1rWbk215pQGDeEKWNygHQr8quTwd6Hg53c/8As7/tRNffs/8AxD+Ffii73TReFtU/sG7mblkW0lJtST/dAJT2BXsorx343fFDxD+1h8cFl061nnF3Oum6FpQ6xwlsID2DMSXY5wCTzhRj2T9pT9gmb4W/CvSfFHhmebVbnS7JR4jhyWDMMs91EDyEUnBXsqhuzGvuVCnToUsNi5e+9vLt/kfMOU51alagvdW/n/W55r+w14p0zwR8eINf1q6Wy0rTtKvri4nf+FFhYnA7k9ABySQB1rlv2hvjvqv7RXxMk1nUZzp+jxv9m0yzmLGOyt93VgoJLH7zsASTwOFUDiPAPgbW/iV4t07w14etHvdV1GQRRxrkKB1LOeyKBuJPQDNfTv7U37Dv/ClPhfoHibw/cXGsGxiFv4ikI48xmJW4Rf4Uywjx2AjPUsa7qjw9LFqdR+/JWXl/w+xywVaph3GK91av+vI+8f2dfg34b+Cnwz03SfDskV+LqNLu61aMDN/Iyg+bnJ+XGNozgDHqSfT6+EP+Cc37SX9pWP8AwqvxDd/6Xaq02hTzPkyxDLSW3PdOWUf3dw4CCvu+vhcbRqUa8o1Xd9+/mfUYapCpSUoaL8gooorhOk/LX/gpl/ycNYf9gC2/9HT195fsn/8AJt/w7/7A8P8AKvg3/gpl/wAnDWH/AGALb/0dPXHeA9d/aY8O+F9KHhOLx5L4ektxJYfYbGe8thCenl/I6qOOAMY9Oa+zqYV4rAUYqSVu587GsqGKqNpv0P1y1HUrTSLGe9vrmGys7dDJNcXDhI41HVmY8Ae5r8i/20PjjafHz4yCfQDJc6FpcC6bYMFOblt7M8qrjPzM2AOpCqeM4q/c/Bv9pn45NFBrem+Lr+2LL+78RXL2sEeDjd5c7KBjGeFz9c19Wfsv/sA6f8KtXs/FXje7t9f8R2xEtpY24JtLOTs5JwZXHbICqeQCQGHNQhh8rvWqVFKfRI2qyrY61OMHGPVs9v8A2X/hzcfCn4D+EPDl7G0OowWpnu42PKTSu0rof90uV/4DXD/8FAv+TV/FX/Xey/8ASqKvouvnT/goF/yav4q/672X/pVFXi4abqYyE5buSf4no1oqGHlFbJP8j4c/Yt/aQ8M/s5694nvfEtjq19FqltDDCulQxSMrI7E7vMkTA5HTNfV//D0D4Wf9ADxh/wCAdr/8k18t/sO/s9+FP2gPEHimz8VfbjDptrDNB9inER3O7A5+U54Ar67/AOHbfwf9Ne/8GA/+Ir6DHvAfWJe3UubTb0PJwqxfsV7Jqx7x8I/ihpXxm+HuleMdEt7y10zUvN8mK/REmXy5nibcEZlHzRkjDHgj6V2Fcr8L/hto/wAIfAumeEtA+0f2Tp/m+T9qk8yT95K8rZbAz8zt26Yrqq+TqcnPL2fw309D3oc3KubfqFfnR/wVQ/5HDwD/ANeF1/6MSv0Xr86P+CqH/I4eAf8Arwuv/RiV6uT/AO+Q+f5M4cw/3aXy/M+jP+Cfv/Jq/hX/AK73v/pVLX0XXzp/wT9/5NX8K/8AXe9/9Kpa+i64sb/vNX/E/wAzpw/8GHovyCiiiuM6D8wP+CoH/JfdA/7Fm3/9Kruvtf8AYz/5Nh+H/wD14t/6Okr4o/4Kgf8AJfdA/wCxZt//AEqu6+1f2N5Fi/Ze8Au7BEWwcszHAAEsmSTX02N/5FtD+ujPFw3++VS9+1F8crf4B/CbUteVo31q4H2TSrd+RJcsDhiO6oMufULjOSK+Iv2AfgjdfFf4pXnxI8SK97pui3JuEmufmN5qTHeGJPXZnzCf7xj964/9or4kax+2B+0VY6B4YDXWlxXJ0rQ4f4Cpb97ct6BtpcnsiLnoa/Tn4R/DLSvg98PNF8J6Qv8AounwhXmIw08p5klb3ZiT7ZAHAFTP/hNwns/+XlTfyX9fr2Kj/tmI5/sQ282fDH/BVD/kcPAP/Xhdf+jEr6M/4J+/8mr+Ff8Arve/+lUtfOf/AAVQ/wCRw8A/9eF1/wCjEr6M/wCCfv8Ayav4V/673v8A6VS08R/yKaXr/wDJCpf7/U9P8jm/+ClXiN9G/Z4gsI+f7X1m3tZBkj5FWSbPTn5ok49/avFv+CWHh2G68YePddZAZ7GxtbNGI5Amkdmx/wCA4r1P/gqDaySfA/w7Oq7o4vEMQfHbdbXGD9OP1FcB/wAEp7qNLv4m2xb97ImmyKvqqm6BP5uv51pS93KJtd/1RFTXMIp9v0Z+glFFFfLHuBX57f8ABVLwykep/D/xDHEPMmhu7CaXjOEaN419T/rJfp+NfoTXwT/wVU1aJdN+HWmAZmkmvbknP3VVYVHHuWP/AHya9fKW1jIW8/yZwY+31eV/61Ov/wCCYGtTXnwX8RadIzMllrjtFn+FXhiJUf8AAlY/8Cr0f9vX/k0/xz/24/8Apfb15d/wS3tJE+Evi26I/dSa35ann7ywRk/+hrXqP7ev/Jp/jn/tx/8AS+3retb+1Fb+ZfmjKn/uP/brPgf9jH9obw5+zr4y1/VvEllql7bahYLaxLpcUcjhhIrZYPIgxgdia+uf+HoHws/6AHjD/wAA7X/5Jr5G/Yx/Z58OftFeMtf0nxJe6pZW2n2C3UTaXLHG5YyKuGLxuMYPYCvrn/h1/wDCz/oP+MP/AAMtf/kavVx/9n/WH9YvzabHBhfrfsl7K1g/4egfCz/oAeMP/AO1/wDkmvFv2tv21vA/x6+Ep8L+H9K8QWeofb4brzNSt4Ei2oGyMpM5z8w7V7T/AMOv/hZ/0H/GH/gZa/8AyNXi37W37FPgf4C/CU+KPD+q+ILzUPt8Nr5epXEDxbXDZOEhQ5+Ud6ww39me2h7K/NfT1Na3132cue1ranU/8Epf+ao/9wv/ANvK+/6+AP8AglL/AM1R/wC4X/7eV9/15Wbf77U+X5I7sv8A92j8/wA2FFFFeQegfix+1d/ych8RP+wxP/Ov2nr8WP2rv+TkPiJ/2GJ/51+09fTZt/Aw/p+kTxcB/Frev+YUUUV8ye0fK/8AwUk/5NvP/YYtf5SV8qfsL/tJeD/2e/8AhNv+ErN+P7X+w/ZvsNuJf9V9o37vmGP9auPxr6r/AOCkn/Jt5/7DFr/KSvkn9if9l/wr+0j/AMJn/wAJNf6xY/2L9i+z/wBkzRR7vO8/dv8AMifOPKXGMdT17fXYL2X9mz9vflvrb5HgYn2n12Pst7f5n1t/w8k+D/rr3/gvH/xdfRXgXxnp/wARPB+k+JdJ87+zdUt1ubfz02PsbpkZODXy9/w6/wDhZ/0H/GH/AIGWv/yNX098PfBFj8NfBOi+F9MluJ9P0m2W1gku2VpWVehYqqgn6AV4mKWDUV9Wbv5np0HiLv2yVvIq/FjxM3gz4XeL9ejOJdM0i7vI/wDeSFmUfmBX5G/sg+F7fxh+0r4B066j82Fb83hTPB8iN5xn2zEOO9fqx+0ZZy3/AMAfiNBCpeVvD18VUAktiBzgAdScV+X37C97Fp/7VXgSWU7VaS6iH+89nOi/qwr1sr93B4iS3s/yZ5+O1xFJPa/6o/Yaiiivlj3AooooAKKKKAPhf/gqh/yKPgD/AK/rr/0WldT/AMEv/wDkgWv/APYzXH/pLaVy3/BVD/kUfAH/AF/XX/otK6n/AIJf/wDJAtf/AOxmuP8A0ltK+ml/yKF6/qeKv+Rg/T9D6/ooor5k9oKKKKAPOPFfwD8MeMPFF14gvJNUttTuo0ilksdQktwyoAFBCkdhWPdfss+CNRVYtQfW9StwwY293rE7xtj1G7+VerR6lZzX01lHdQPeQqHlt1kBkRT0LLnIB96s0AUtH0ex8P6Xa6bptrFZWFqgjht4V2oijsBXm3iD9m7wxqmvXOs6TqGueDtSunL3M3hvUDaeex6llwwHPPAGTzXp1nqFrqSSPaXMN0scjRO0MgcK46qcHgjuKxv+FieFP+hn0b/wYRf/ABVAHKeDf2ffC/hLXk16eXU/E2vx/wCq1TxBeG7mj/3eAoPvjI9a6P4hfDfRvidpNpp+tLcGC0u0vYWtZ2hdJVVlVgy88Bz+lXbXx14bv7mK3tvEGlXFxKwWOKK9iZ3J6AANkmtManZtqJ08XcBvxH5xtfMXzRHnG/bnO3PGelAHl/8AwzP4V/6CXiT/AMHdx/8AFV1ngr4Z6V4Ds7+20+41G4ivceb/AGheyXBGAR8pcnHU9K62s4+ItKW3vLg6nZi3s5DFcy/aE2wODgq5zhSCRwaAKXgfwXpfw88L2Xh/Ro5ItNs9/lJK5dhvdnbJPX5mNb1c9/wsTwp/0M+jf+DCL/4qpLfx54ZvLiKCDxFpM88rBI4o76JmdicBQA2SSe1AEXjr4e+H/iTojaV4i02PUbTdvTdlXibGNyMMFT9D7HivO/8AhmLT/K+zf8J548/s7p/Z/wDbh8jb/c27M4/GvTdQ8aeH9JvJLS+13TbO6jxvguLyON1yARlScjIIP41Y0vxFpOt5/s7U7O//AOvW4ST/ANBJoAzvAvw98P8Aw20RdK8O6bHp1pu3vtyzytjG52OSx+p9hxVf4hfDHw58UNLjsfEFgLpYW3wTxuY5oG/vI45HQcdDgZBrqqKAPGH/AGXNGvIxbap4x8ba1pn8WmahrZe2YehUIDj8a9V8PeHdM8J6PbaVo9lDp2nWy7YreBcKvc/Uk8knkk5NVPEHjzw14TcJrfiDS9IkYbljvbyOJmHsGIJ/CrWheJ9H8UW7XGjatY6vApwZbG5SZQfTKkigDj/H3wL8L/EDVo9YuFvNH1+Ndq6xo1wba6xjHLAENxxlgSBx0rDs/wBmLw02p297r+s+JPGht3EkMHiTUzdRIw77Qqg/Q5HtXp+reINL0FY21PUrPTlkJCNdzpEGI643EZrO/wCFieFP+hn0b/wYRf8AxVIC14m8Laf4s8M3ug38Tf2beQ/Z5Y4W2HZ6AjpVPwD8P9D+Gfh2LRNAtPslijtIdzFnd2OSzMeSeg57ADoK0rDxFpWq2c13ZanZ3lrDnzZ7e4R0jwMncwOBgc81nj4ieFCcDxNo5P8A1/xf/FUwLHjDwnp/jrw1faFqqPJp96gSZY3KMQGDcEdOQKzvGXw00Px54PTwzq8U0ulL5eEjlKN+7+78w+ldHaXtvqEImtZ4rmInHmQuHXP1FYv/AAsTwp/0M+jf+DCL/wCKoAveG/DmneEdCstH0m1Sz06zjEUMKdgO5Pck8knkkkmq3izwbpvjS1sLfU0keOyvYdQh8tyuJYjlCcdRntUX/CxPCn/Qz6N/4MIv/iq1Y9Z0+aS0jS+tnkvI/NtlWZSZ0AB3IM/MMEHI9aAG63oen+JNKudM1Szhv7C5XZLb3CBkce4PvznsRmvJl/Zb0Sxje30jxd408P6Y3TTNN1opbqM9ArKxxz3Jr2eqZ1iwGpDTje241Ap5gtPNXzdv97ZnOPfFAHO/Dv4V+G/hbYT22gWHkPcNvubqZzJPcNzy7nk9Tx0GTxzV+18D6XaeNrzxXHHINYu7RLKVzIShiVtwAXsc9636oza5p9vq9vpUl5CmpXEbTRWrOBI6KQGYL1IGRk+9AEmqaXaa1ptzp9/bx3dlcxtFNBKu5HQjBBHpiuN/4Ut4cb4azeA5BezeHJCuIZbpmdFWRZAqv1ChlBx7kdK7yq76hax30dm9zCt5IpdLdpAJGUdWC9SB60AZfgvwXo/w+8OWuh6HaLZ6fbg7UzlmYnJZmPJYnuai8eeBdK+JHhm50HW45JdOuGRpFikKMSrBhyPcCuhqmusWDak2nC9tzqCp5htBKvmhf72zOccjnFAHP/Er4Y6F8WNDg0jxDDNNZQ3K3SLDKYz5gVlByO2Hbit/RtHsvD+k2mmadbpaWNpEsMMMYwqIowBUkepWc19NZR3UD3kKh5bdZAZEU9Cy5yAferDMFUsxAUDJJ6CgDn/FngXSvGs2iS6pHJI+j6hFqdp5chTbPGcqTjqOeldDVPS9Z0/XLc3Gm31tqECtsMtrMsqhgASMqSM4I496W/1ax0ryftt5b2fnyCKL7RKqeY56KuTyfYUAW6KKrf2laf2h9g+1Q/bvK8/7L5g83y87d+3OdueM9M0AWaKKr2uoWt886W1zDcNbyGKZYpAxjcdVbB4PsaALFFVtP1Kz1a38+xuoLyDcU8y3kDruHBGQeoqaaZLeJ5ZXWONFLM7nAUDkknsKAH0VTtNZ0+/0839tfW1zYgMxuoZlaLC/eO4HHGDn0xU1neW+oWsdzazx3NvINyTQuHRh6gjgigCaioL6+ttMtZLq8uIrS2jGXmncIijOOSeBTrW6gvraK4tpo7i3lUPHLEwZHU9CCOCKAJaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDmfiJ4CsfiR4Ym0a/d4VZllinjALRSLnDAHrwSCPQnp1r5b8O/CXU7XxhpWky2Msd3OPtNv/AGkGgUPEymRvkD5QgOBkqT8pOOA/2VXE/FXfpmjWniKIyl9DuUu3jjdl3w7gsw4Iz8hY88cdK+ezPLaGIaxU170d/NLf8L2PXwOMq0b0IvSX5/8AD2PljxH4FntdTtbiLSZ7vT28xYHkVYY5tkjoqu6BVLnYXYLzsxkjDOOOu7c3UOpahqM+LgsiW6RqFEjHByFwMIqdgBjcgwK+3te8AaJr3h3Uxpmn2FreahYzww30ECKf3yHLbgOhJBPrXjPiL4H3ItNV1qXR1soFkW/uLX7QLmedvNVpVUKoVY1TzcKMliVz0GPkswyGpG7parfy29Om+r9Oqf0GFzSE9J6Pb8f6/U8PuL3bp8BvbG2jTUIf+PqEFp2CyAeYQzYByjDjbu+bPrXT+Efh5qHjTxBdWOnWc0rRIhv/ALUVUyq7iRXJyQm4gZ2kkKONxyDu+HPg3c+JNLuJ0WTV7fT1QfaLaN1jnRnyy25cKXKKGc4wGaQr6E+wfATwffeHbjVLu4Mk6TwQxPeTQPCZ5E3D5EcB9ipsG5gMsWx0yeXAZTUxFaCrr3X102s7/wDk34Xu9VfbFY6FKnJ037y/4Fvw/rQ5j4N+H9X+Guq+K21Cwkha20oy20LKWZwru20EcOcnAK9eOh4rwjxBoupWugw67qc80d/q15cLLBOdryquxjIR1wXZhz3X2r7W1DUoNL8aT3FwxWOHRnnbAydiSZY15P4luvDepfEzxP4i8SWX9q22hWWnW9pY8SCV7gFwQucMAXxzx8xOOlexmWV0/q9PDxnZRckr7K/vNu3aKaSPPweNm6sqrjuk3br0SXq2jwRVjOqRJH5nmuATax/vHO8bzHtIGesi45OWAzXVfBu68T6Z40W50rRY9R1Cw3wz6eIhauFKsp8x9oCgMc/Mc5UDFWV8QeFreTxJpz6LLNBc3K6pFbXFtiaCaNiWt3MfBiZWdVZcbd3I7132qax4EXxVpesxaysGg6/pTWOqWcM7mRMRh0aUqxbdjCHuCPc14mFw0faRqqsk4vo7W1tfXTR2b0ej1Wh6des3B03Tbuu1+l+mvf7ty58VNe1Xx18GLG9utJjt7ybWVjjs4phKsio0i/e9CVP4c968V8QeBdT8M6TDNqlreQaddvHcXNxNCUcuvmDEeR0YPwG+YEZYKMZ+sriPS/7K8CppUYj0n7bEbRNjJ+7FvKU4YBugB55ql8etHXXPh1dW0jNFB50bSTBSwhGcB2A52hipbHQZPavpsflSxUJ4ic+acYpdLNpXv00d/uPFwuO9jKNGMbRcn8tf0PkBYbNZHgZJdYvZNqIthvheONEIIO5DkkYyNp4U880lzqV/rWlanNDMiWduIYmtWw0q24O1Pn2glFKxg8/eZTj07SfwFq1vdN4qnkhiMdyjNcCdXtVnZ5SsfmAlWX5YUJBwvmYJGDS6D8I764tL9ltb5fKSGC6ezj+0SW8kkZYjYvLqBt3KuSPNUj7pFfEfUcTJ8kYtJ38tLOzfXve7tp930n1iilzN7W8/66bHF29iLzU9Mk02OWwvLjaq28bsMybeDE/P3+OCchjjpyPcvhb4Bvba80LU7DTL25gku4r5NQlkt/s8UDoyzKuCHbcGX5SikFBx1rqvh78LY7zSGvVubzS54b+RrK4+yKrPCFTloZ42x+9ErrlQy7zjG416v4d0ODwzodlpdq0kkFrGI1eUgs2O5wAMn2AFfY5Xkns5KrU9Va3l6+uy6WPn8dmSlF04enX+v6dzRooor7s+VCiis3xB4k0jwlpUup65qllo2mwlRJeahcJBChYhVBdyAMkgDnqaaTbshbas+U/+Cneova/AXRLZHK/avEMAcYGGRbe4bH/fW0/hWZ/wS4ttvwl8W3G7Pma55e3HTbBGc/8Aj36V59/wUW+O3gr4ieF/C/h7wt4itdfube+e9uTp8nmQxr5ZRcuPlLEseASRg5xkZ6X/AIJ3/GPwB4C+D+qaJ4g8Y6Vomrza1Lem21OdbUBGhhjUh3IVs+UTweM8jufqPZTjlXLyu7fbzPF9pF4699LHsv7efw3HxC/Z01yeKIPf+H2XWYCSRhYwRN07eU0hx6qPrXyl/wAE+/jXD8NtH+Klnfy5tbTRm8QwQt0L24Kuo/2n8yIY/wBn61+kyvp3irQQ8UtvqekalbZWWFxJDcQyLwysDhlZW4I4INfiJ8R/DGp/CD4ieLvCYnngNpcTadI24Bp7feGQnHZ1EbY9/wAKMrSxWHqYOfk/8/68xY1uhVhiI+h75/wT58A3PxL/AGhrjxXqe+7i0GKTUp7iQ533cpKx7vckyP8AWOv1Or5e/wCCeHwxPgX4CQazcw+XqPia4bUGLAbhAvyQL9CAzj/rrXuXjD4weBvh9dfZPEvi/RNDvPLEwtL6/iinKHIDCMtuIJUjIHUGvOzKo8TipKCuo6L5f8E7MHBUaCcuuv3n5J2rLon7YELCQqtn47U+ZjJATUOuPwr9m6/Ej4geLtPm/aI8ReKdLuxd6XJ4ouNUtrqFD88Ru2lRgrAHoRwRX69eD/j18OfH1xZ2ugeNtD1K+vBmCxjvoxdSfKWIEJIfIAJI25GDmvRzinOUaUknt/kcmXTinUjfqd7Xwv8A8FUP+RR8Af8AX9df+i0r7V8ReKNG8H6W+pa9q1jomnIyo15qNylvCrE4ALuQASenNfnr/wAFHvjP4M+Ill4N0fwvr9n4gubKa4ubmXTpRNDErKiqDIpwWJDcDOAOcZGfOyqnOWLhJLRf5HXjpRVCSb1PXv8Agl//AMkC1/8A7Ga4/wDSW0r6/r84f2H/ANqv4ffA34T6toPiy/vLXUbjW5r6NLezeZTE0ECA5Udd0bce1fQ3/DxL4L/9BjUv/BZL/hWmPwmIqYqco02032IwtelGhFSkk/U968YePPDfw+sIb7xNrmn6DZzS+THPqNwsKO+CdoLEZOATj2Naml6naa1ptpqNhcxXlhdwpcW9zA4eOWN1DK6sOCCCCCOxr80/26P2rPB/x08L+G9A8HyXd3Da3j311cXNuYVVghRFAbknDuT2GB1zx95/AGaO2/Z9+HE00ixRR+F9Nd5HICqotIySSegrmr4KWHoQqzupNvQ2p4hVasoR1S6nodfnj/wUa/aR/tK8/wCFV+H7rNrbMs2uzRHh5Rho7bPovDt/tbRwVIr379ob9s7wV8OvhxqVz4S8UaN4l8Uzr9n0+2028juhHIw/1smwkBUGWwepAXvkfnJ8BfBujfFr4vWsfjnxPYaLohkfUNW1DWNRS2a5G4Fo1kdhukkZsdcgFm7V6eV4PlbxVdaR2Xn/AF+Jx47Ec1qFJ6yPsT/gnL+zidD0s/FLX7XF9fRtDokMq8xQHh7jnoX5VT/d3Ho9fU/7Qn/JAviX/wBizqf/AKSyV3Gn2ttZWNtb2cccNnDGscMcIARUAAULjsBjFeDftJftBfDay+DnxA0f/hNtEutXutGvtOi0+yvY7ic3EkLxKhRCSp3HBzjHfFeZKtVxuKVS19V8kdipww9Dkv0Phn/gnf8A8nPaN/143n/ok1+rWtaPZeItIvdL1K2jvdPvYXt7i3mXckkbAqykdwQTX5BfsV/ELQvhn+0HoWseI71dN0pori2e8kH7uJpIyqlz2XOBntnJwMkfrL4R+JnhDx+0yeGfFGj+IJIFDzR6ZfxXDxKTgF1RiVBIPWvRzuE/rKmlpZanJlso+x5b63PyO+Pfwm179lb41CHTrq4t4YZ11LQdWUYZow2U56F0I2sO+M4wwr9Q/wBm3452Hx/+F9h4itwkGpx/6Nqdkp5guVA3YH91uGX2bHUGuL/bc+GvhP4kfCVodd1zR/Deu2jtNod/q95Faq84XLQb5GGRIowQDwQrc7a/PX9kn9oK4/Z/+KVvfTyM3hrUytpq9uoz+6z8soH96MksPUFx/FmuqUXmuD57fvIfj/w/5mCl9RxHL9iX4f1+R+yNFch4P+L/AIG+IF4bTw14v0TXL0RmY2tjfxSzBAQCxjDbgAWAzjuKu+LviL4V+H6W7eJ/EukeHhchzB/al9FbGbZjfsDsN2Ny5xnG4eor5X2c+bls7nu80bXvofmv/wAFMv8Ak4aw/wCwBbf+jp6+8v2T/wDk2/4d/wDYHh/lX5z/ALe3xI8OfE747LqHhjU4tY0+00uCye7t+YmlV5HYI38QAkXkcZzX2n+yn+0R8NLX4D+DNJv/ABvoekanp1glrc2mqX0dq6OhIPEhGR3BGcg19NjaVR5fRSi7r/I8TDTj9bqO59O0U1HWRFdGDKwyGU5BHrTq+VPdCvnT/goF/wAmr+Kv+u9l/wClUVfQt5eQadZz3d1MlvbQRtLLNIcKiKMsxPYAAmvjT9ub9on4c+KPgLq3hrQvFmna7rOoT23k2+myicAJMkjMzLlVGFPU5JI98ehgYTliabir2a/M5cVKMaM030Z5z/wSv/5HDx9/14Wv/ox6/Revyj/YT+PnhD4D+IvFd34uuri1g1G1gitzb2zTEsrsTkL04Ir7E/4eJfBf/oMal/4LJf8ACvTzTC16mLlKEG1p08jiwNelChGMpJPXr5n0L4k8SaX4P0O71jWr6HTdLtF3z3Vw21I1yBkn6kfnVTwZ468P/ETR/wC1vDWrWutab5jQ/arR96b1xlc+oyPzr4o/aq/bk+H3xC+Cuu+FfCUuoX+q6uI4N81mYooYxKjuzFiCSVUqMA8nPavTf+Cbf/Jt4/7DF1/KOuCeBnSwzr1E072s+x1RxMalb2cHdWufVFfnR/wVQ/5HDwD/ANeF1/6MSvvnxh488N/D6whvvE2uafoNnNL5Mc+o3Cwo74J2gsRk4BOPY1+aX/BQ74w+Evit448MR+E9Xi1uHS7KWO5ubYExB3cEKrEYbAXJIyORznOOnJ6c3iozS011+RjmEo+wlG+un5n2B/wT9/5NX8K/9d73/wBKpa+i6+Lf2Gf2ivhz4W+Auk+Gde8WadoWs6fPc+bb6lL5AKvM8isrNhWGG7HIINfZGl6naa1ptpqNhcxXlhdwpcW9zA4eOWN1DK6sOCCCCCOxrix1OccTUclZNv8AM6MLKMqMEn0RaoorE8U+OPDnga1hufEniDS/D9vM/lxTapex2ySNjO1S7AE45wK4EnJ2R1Npas/Nv/gqB/yX3QP+xZt//Sq7rtfid8bB8J/2Fvh14S0i4ZNd8VaT5bMG+aC0JLTtwP4i4jHThmIOVryf/goT8RPDfxI+OGn3nhjWLXXLKy0OCymurN/Mi80TzyFVccNhZE5BIySOoNc78DPh/rP7WHxe8NaJqAZNB0PTba2u5IRtW3sLdQuxT2eVy3vulY9Acfdwox+qUZ1tIw1f6HzEqj9vUjT3loj6m/4Jwfs+/wDCO+HZ/ibrVtt1HVUMGkxyLzFa5+eX2MhGB/srno9fb1V9P0+20mwtrGzgjtbO2iWGGCJdqRooAVVHYAADHtWd4o8ZaB4H09L/AMR65pugWMkohS51S7jto2kILBAzkAsQrHHXCn0r47EV54us6j3Z9DRpxw9NQXQ+Af8Agqh/yOHgH/rwuv8A0YlfRn/BP3/k1fwr/wBd73/0qlr5G/4KLfFbwn8TPG/hSPwrrdrrqabZTLc3Fk/mRKzuCqhxwxwuTjOMivef2E/j78PPDvwC0jw5rfi7SdB1jT7m6E1vq10lrkPM8isrOQGG1h0PUEV7+IpVP7LpR5XdP/M8qlOP16bvpb/I9k/bB+HM3xO/Z58WaXaRNNqNvAuo2qIMs0kLCQqB3LKHUe7V+eH7Cfxat/hT8etPGo3AttH12JtKuZHbCRs7K0Tt6YkVVz2Dsa/W3T9QtNY0+2vrG5hvrG6iWaC5t5BJFNGwBV1YZDKQQQRwQa/LP9tz9lG8+D/iq78XeHrIyeBtTn3kQLxpsznmJgOkZJ+Rugzt4IG7LK6sKkJ4Kq7c23r/AFsXjoSjKOJh9nc/VWivz2/Zj/4KIWug6DZ+GPigLqVbVRFbeIbdDMxjAwFuEHzEgDG9ck8ZGcsfqhf2vvg01iLv/hYWkeUV3bS7iTH+5t3Z9sZryq+AxFCfLKDfmtUd1PFUqseZSPYa/JL9vj4tQfFD48Xlrp04n0nw7CNLhdDlHlVi0zj/AIGdme4jBr2/9pT/AIKLWGpaDeeHPhb9qM10him8RTxmHy0IwRAjfNuI43sF29hnBHlX7Ev7Jt98XvFFn4t8SWDQ+BtNlEii4QganMp4jQHrGCPnbocbRkk7fby/DfUYyxeJ0tsup5uLrfWmsPR17s+5P2MfhvP8MP2ePDGn3sPkalfI2qXSFdrK0x3KrD+8sflqfdTWd+3r/wAmn+Of+3H/ANL7evfJpo7WF5ZXWGGNSzO5CqqgZJJ7ACvkX9uD4+fDrxB+zt4m8O6P4z0bW9Z1J7RLe10u8S6J2XUMrEmMkKAqNySOeOtePhnPEYyNW17yTf3noVlGlh5Qv0a/A8W/4Ja/8lP8Y/8AYHX/ANHpX6T1+VX/AATz+K3hf4YfFTXP+Ep1aDRLXUtM8iC8u22QiRZEbazdFyA2CeOMZyRn9OfCvjrw347tJbrw3r+l+ILaFxHLNpd5HcrGxGdrFGODjnB5rqzinNYqU7aafkYZdKPsFG+upuV8r/8ABST/AJNvP/YYtf5SV9O6tq9joOm3Oo6ne2+nafbIZJ7q7lWKKJR1ZnYgKPcmviX/AIKDfHbwD4t+DVv4c8P+KtN8QatcapDN5OlXC3Kxxor7nd0JUDJUAZySeBgEjky+nOWJpuKuk0dGLlGNGab6GL/wSl/5qj/3C/8A28r7/r8z/wDgm78XvCHw01Xx1YeKtes9AfVY7KS1mv5BFC/kmcOpc/KD+9XAJ55x0r9G/DfizRPGWm/2j4f1nT9d0/eY/tWm3SXEW4Yyu9CRkZHGe9dGbwksXOTWjt+SMcvlF4eMb66/matFFcf4t+MXgTwFeNZ+I/GOh6JfKgkNnfahFFPtOcN5Zbdg4POO1ePGMpO0Vc9FyUdWz8iP2rv+TkPiJ/2GJ/51+09fiB8fvFmm+OvjV401/R5Wn0vUNUmmtpmQqZIy2FbB5AIGRnnB5APFfr14M/aJ+Gnj9dOXRfG+h3F5qAT7Pp8l9HFdszDhPJYh93+zjNfUZtTn7Ch7r0Wvlojw8BOPtauu7/zPRaKKqatq9joOm3Oo6ne2+nafbIZJ7q7lWKKJR1ZnYgKPcmvldz3T5i/4KSf8m3n/ALDFr/KSvKP+CUv/ADVH/uF/+3lbH/BQf48eA/FnwdtfDXh3xRpviHVbjVIZzHpdytwsUaK+5mdCVHJUAZyc+xrxv9gz9ojwX8A/+E5/4S+8ubT+1vsP2X7PbPNu8r7Rvzt6f6xPzr6yjRqvKpwUXdvb5o8GpUgsdGTeiX6M/UusrxN4q0fwXo82ra9qdro+lwlRJeXsyxRIWYKoLMcDJIH1NfPn/DxL4L/9BjUv/BZL/hXhv7Y/7Z3gL4sfBufwn4RuL69vb+8hadp7VoUjijbzM5bqSyoMD3/HxqOX4ipUjGcGk3q7Ho1MXSjByjJN+p93abq2hfEfwo11pl/a63oOpRSwi6s5RJFMmWjcBl4OCGU+4Nfi1qNnrP7PvxseIqRq/hTWVdN4KiUwyBkb/ddQD7q1fqD+wV/yaf4G/wC37/0vuK84/bu/ZJu/ipbp468HWf2jxTZxCK/sI+Hv4FHysvrKg4x1ZeByqg+jgK0MHiqmHqP3W2vuZyYqnLEUIVYL3lr959S/D3x5pPxN8F6R4n0ScT6bqUCzxnPzIT95G9GU5UjsQa6Kvx1/Z1/ar8Xfs06tcWMUH9qeHpZSb3QbxjHtkHBeNsExScYPBBxgjIBH3p4L/wCChXwd8VWsJ1DV7zwxePw1tqdlIwB/66RB0x7kj8DxXLi8rr0Jv2ceaPS2v3m9DHUqsfedn5n0tRXhWqftwfBLSbfzZPHVvPngJa2lxMxP0WM4/HAp3wP/AGvPB/x+8dax4b8NWuoRHT7P7Yt1fIsYuFDqjFEBJABdOWwfm6V57wtdRc3BpLyOr29JyUVJXZ7nRRWZ4i8UaN4P0t9S17VrHRNORlRrzUblLeFWJwAXcgAk9Oa5km3ZG22rPir/AIKof8ij4A/6/rr/ANFpXU/8Ev8A/kgWv/8AYzXH/pLaV4//AMFHfjV4M+I1n4N0bwtr9n4guLGa4ubmXT5BLDErKiqN4+Uk4bgE4xzjIrqf+CdPxs8C+BfhTrvh/wASeKdM8P6o+uSXqR6ncLbq8TwQIGV3IU/NG2RnIx719VKlU/slR5Xe/wCp4aqR+vt30t+h97UVU0nV7HXtNttR0y9t9R0+5QSQXVpKssUqnoyupIYe4NW6+U2PdCiiigDxnwb/AMnRfET/ALBWn/8AoNezV4z4N/5Oi+In/YK0/wD9Br2agDyT9m//AJF/xh/2Nep/+jBXn37Nfwo+H3ib4KeHNS1zQdKvdUm+0+dPcgeY2LmVVzz2UKPoK9B/Zv8A+Rf8Yf8AY16n/wCjBXmP7Of7Ofw88efBvw9ruu+Hvt2q3X2jzrj7bcR7ttxKi/KkgUYVVHA7UhntGh/Bv4caRq1rfaV4c0iDULdxLBLABvRhyCOe1cTda1p+h/te3c+pX9tp8DeDVRZbqZYlLG7U7QWIGcA8exrsvBn7PfgD4e69DrWgaB9g1OJWRJ/tlxJgMMMNryEdD6VwHiDwZofjn9rS5sNf0y31Wzj8ILOkNyu5RILsKG+uGYfjQB7H/wALE8Kf9DPo3/gwi/8Aiq8j+AOl6V4ytPi5Z3sNvqukX3jC+LISHimQsrKcjqDwa7j/AIZ3+Gv/AEJmlf8Afn/69cj+y3p1to7fE6wsoVtrO18X3sEEMYwsca7VVR7AACgDmf2kvg14I8K/Ddb7SPDNhp93/aVpF50MeG2NKAw+hFeu6b8B/h9o+o2t/ZeEtNtry1lWeCaOLDRyKQysOeoIBrlf2sv+STp/2FbL/wBHCvZqBHz5oPw78NePv2hvi9/wkWi2ur/ZP7H8j7Um7y91od2PrtX8hTfjp8F/A/g34a6t4k0TTYfC+uaQgurHUdPkaCRZgw2rwcHcflwfXiq1h8N7X4hftDfFv7VrGt6T9j/sjb/Y9+1r5m+0Od+372Nox6ZPrXa2/wCzP4Ta+trjV7zXfEyW7iWO11vVJLmAMOhKHAP0OQe4oGegeDdRutY8H6Ff3yeXe3VhBPOmMbZGjVmH5k1yvx68dX3w++Gt/f6Sm/Wrl47GwXj/AF8rBVPPBIGWGe4r0IAKAAMAdBXkn7UWl3l58KZdRsoGuptEvrbVjAvV0ifL/gFJY+ymmIk8C/s3+EPDumJJrul2vizxDcDzL/VNZjF088xHzECTIUZ6d8dSTzWR8QPgQNBvrHxZ8L9Pt9D8U2M6F7G1Zbe1v7csPMidPuDjnIA6eu0j1nwp4p03xp4fsta0i5S7sLyMSRyIQceqn0YHgjsQa5D41fFY/DLw/bDToIdU8UalcR2ul6SzHdcOzgEkA52gZ56ZKjPNIZxv7Q2k6f4g8e/CWw1i2iuNOuNSuFnt7jGxh5SnDfjXUf8ACi/hR/0K+h/kv+Ncj+0R4bsvGHjL4SaNr1st3Z3moXEd1BG7orfuVJAZSGAyPXNbn/DIvwm/6FT/AMqN3/8AHaAOh1Twd4e8GfC7xZbeG9OtdNs5tPupXSzGFZ/JYZ+uAB+FcD8D/gf4C8QfCPwrqOo+FdOvL65sUkmuJYss7HOSTmvQtU8GaN8P/g/r+iaDZ/YNMg028aODzXk2lo3Zvmcljkk9TXlfwX+BGneIvhV4Y1KXxP4stJLqySRoLPWZIoUJzwiAYUe1AFm48K6V8I/2ivAtl4OjOmWniK3vE1bSYJGMJWKPdHLsJO07sjI/uEDqc9P44+AXw70/wT4gurbwhpkNxBp9xLHIsWCjLGxBHPUEV0fgL4J+GPh7q1zq9jHd3+t3CeXJqmqXTXNwUz90M3QdOgBOBnNbnxE/5J/4n/7Bd1/6KagDyL4H/A/wF4g+EfhXUdR8K6deX1zYpJNcSxZZ2OcknNbXiXTrbR/j58KbCyhW2s7XS9SgghjGFjjWKNVUewAArf8A2d/+SIeDP+wdH/WuZ+K2vWHhf45fD/VtUuUtNPs9L1aWaaQ8Kojj/M9gO5IFAHdfFL4jWvw08MtfyRNe6jcSC107To+ZLu5bhI1H16nsPwrxfwD4E1Lwl+0B4b1LxDeNf+K9d0m+vtUl3ZjjfdGEhjHZI1wo+npgDsPhZoN/8TfFX/C0PE1s9vEUaLw1pMw/487Y9bhh/wA9ZOueynqRtxoeJP8Ak5fwb/2Ar7/0OOgRm+IvEXiz4o/ErWPB3hXVz4Y0LQViGrazFCHuZppFLCGHdwoA6t1BB7YB4bWvgfHb/HDwzo7+NvGVxLdaVdXB1STVybuNkZAFjfb8qnPIwa6i48SH4CfFrxRf+I4bhfBviqWG6h1iGFpI7O5VAjRzbQSobjBx6dfmxT1z4veCbr4++E9Xi8U6U+mQaNeRS3X2pdkbs6FVY54JweD6UDNG61Hxb8BfE2gRat4iufF/gbWLxNOa41JAb3T5nyI2Mi48xCRyW6Y4weu94k/5OX8G/wDYCvv/AEOOuT8a+Nbb9oHxBoPhTwX5uo6RY6pBqGsa4sTLbQpEdwiRmA3Oxx09uozjY+JXibTvB3x48Nazq1ytpp9n4ev5ZZW7DfHgAdyTgAdyQKAO4+K/xJh+G/h1Z4rc6jrd9ILTStMj5e6uG4Vcf3R1Y9h7kV498M/AV74I/aI06XWr5tT8Tav4buL/AFW6LEoZ2uIxsQdkRQFH07DAHY/CXw3qXjvxHJ8UPFls1vdXEZi0DSZuf7Osz0cj/nrIOSeoB98La1L/AJOo0b/sVLj/ANKUoAzfDd/baX+0p8S7y8njtbS30axklmmYKiKEyWJPQAVnzatq/wC01ezWOjzXGifDCCUxXepplLjWWU4aKLukXqx5PT1AwtW+GNp8UP2oPFtpqt7cLolrY2M93psLlEviEGxJCCDtB5x346Vr6hBJ+zH42OpWkbf8Ku12cC8t41yujXTEASqB0ibjIHTp2UEA9y8P+H9O8K6NaaVpNpHY6faoI4YIhhVA/mT1JPJJya8C8deEZP2jfH/imziuHh0jwlZvYafPG5Ctq74dpMg9IwqoR1yeK9Y+LHxEi8AfDfUvENsy3VwYQmnrGPME88nywgAfeBYg8dga8x+G/wANfi/8P/CsGm6fqvhFBI73c7XlvcSTvNIdzmRgQGbJxkdlFAHpnwX8dyfEP4e6bqV2vlatDus9ShIAaO6iO2QEdskbgPRhXLf83ff9yL/7kK5r4dx+JfhR8abnTvFk2myW3jrfdwSaUkiW6X0SjeuH5BdMseeWxiul/wCbvv8AuRf/AHIUAew15J8CP+Rg+Kn/AGNdx/6Ljr1uvJPgR/yMHxU/7Gu4/wDRcdAip+yb/wAknf8A7Ct7/wCjjUHxB1S5+M3jKb4caHO8Xh+xKv4o1OFsfLnK2SMP4mwd3oAR2Irzf4Y/ELUNJ+FVn4P8KBbjxtruq3yWo6rZQ+cwe6k9FUZxnqRwDgivov4a/D3T/hl4TttFsC0zqTLdXkn+tup25eVz1JJ9+AAO1Azx39n/AP5NAuf+vHVP/Qpq9H/Z34+B/gwn/oHR/wBa84/Z/wD+TQLn/rx1T/0KasHwf4p1Hxx8M/BHww8JXLQXtzpccuvarDz/AGdZnqgP/PWQcAdQD75ABc+LuoXXx40nxi9jPJB8P/Cmn3kxuIiQNW1GOF2UKe8UTAH0Jx1yCvsnwJ/5Iz4J/wCwRbf+ixVTx54Z03wb8AfFWi6RbLaadZeHb2KGJewFu/JPck5JJ5JJNW/gT/yRnwT/ANgi2/8ARYo6gd1RRRTEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVbUrCHVdPurK4Xfb3MTQyL6qwII/I1ZopNJqzGnZ3R5r8B9cmuPCtz4fvpN+p+HLp9NmzwWRSRG2PTaNo/3K9Krx2SUeB/2g3kfEVh4ltF3MiHYJUGAXYtgHK4GByZB65PsVebl8n7J0Zbwbj8ls/mrHbi4r2iqR2kr/fv+NzO8Ra5D4b0S81KdWkjt03eWmNzt0VRnuSQPxr5wj/aG1nxRfTGTX7LwnbLOsFtHa2y3MkpZgCztKdoRRyWOzPbvj2f4va/puj+F47fULpbU3t3bxRNJwpInjLZY/KMLluSOAfSvlS5hitW0S5ttBttVls1UzCJjJHNIsaqUkOPnxtSQbPlKs3LDL189nmMrUqsIUZ2S3WvX/DrpvY9bK8PTqU5SqRu+j0/XTyOlj8aX3gf4rNq0t7N4z0/UYns33Zd7m3OM7BtCfeGQq5GODjOa6uMfBG4kvIriz1LSrp0CyxXEd2Hts4C5A3BeSAM5A4Fcl4T+EWr+OPGEcXiNksrGWZ1lmhKvLMU3ZCO2W52AgkkbTxwMDpPi38A7XwL4duNe0O9uZ7KCMQ3lleuHPkswGUOByrEMAe4z2wfFpRxsaNSv7FSppt2mrtaatX1t139EelUlhnUhS9o4yaS912T7X6fgYF98A/tdwlxo3iSxvfCKylbi/upwr2AUAuZFONrZyAPpnHahrngHwHpOrWEEfjvdoo3faz9mkklWQoSpXYhUq3HpgZ5OePOW1nUTDd2EhnWHUZ4bm4hUkGZgGKnHfPmFh9QfSvU/hR8J9Q+Lcf9pTXz6RpNpO5M0a7pZ7hgC5TJ+UAbAD22jAznHk0JUMZP2WFw95vu3bR6paqytrq/Lsd1T2mHjz163ursl/k9fT1L/wARvjMvizUvD2jeCZJNNsdIlSaK+nkWI7lUxrjzGA2hWI+c/NuwR69jqnxu8T+CWlOptoPiKC1EfmxWLSW1y0bhSs2GyrLzg7BgEjnqB5/8WPhXqvw71yG/sru58QRPBJObq4lcXMCoMPllYZUBhzj+IjFcbJp2ma9rjwzabc6RdiAwzxs0cca3EeTJJkhVX5Fzs+UbsjKggj0KmMx+GrVFNuNVteUbW0srOL6dzlhh8LWpwcVeCXz31u9GfZXgrxTpXxG8KR3trbAWkoMU1ncIp2NgEow5BBDA+4YGpNQaw+HvhmV9L0iNLeORFSysVjiDPJIqDGSqjlgTk9q4r9n9IbHR9VsiPs12s8LtayDZIEa2iZSV64wdv/AK4v4yfGZrjxTF4StIoJNPa4SC7My79/zgHjqNrDIwQcqGyQRX2k8dCjg44is7Tei9dvz3PnI4WVTEujT+Fa/I9V8I+Pr7WvEH9kanpcdjcSWQvYpLe4E0ZUCIspPBDDzk7YODgmu2r4u8O/Eu78BalYatDILm4uNtvcyTSeefJWC3IUHaMLljlRyNijcduT9g6BrUHiLR7TUbb/VXCbguQSpzhlJHGQQRx6U8qzGONU4OV5R/J7dhY/BvDOMkvdf5mhRRRXvnkhXCfG74S2Pxw+HOo+D9RvrjTrS+eF3uLUKZF8uRZBjdxyVAru6KuMpU5KcXqiZRUk4vZnxP/wAOtfBn/Q5a9/36h/8AiaP+HWvgz/octe/79Q//ABNfbFFeh/aeM/5+P8Dk+p4f+QxPA/haHwN4K8P+G7aaS5t9H0+30+KaUAPIsUaxhmxxkhcnFeJ/Gb9hv4f/ABw8dXPizWb7XdO1S5ijinXSp4I45Ci7Vdg8LkttCrnPRRxX0PRXHTr1aU3UhKzZ0TpQqR5JK6KOhaLZ+G9E0/SNOhW3sLC3jtbeFQAEjRQqqMegArwH9oL9inw9+0J45h8T6r4h1PS7mKyjsRBZpGUKozsG+YE5y5/KvoyiilWqUZ89N2Y504VI8s1dHxP/AMOtfBn/AEOWvf8AfqH/AOJrsfhD+wB4Y+D3xG0XxhYeJ9Xv7vS3keO3uY4hG+6NoznAz0cn8K+p6K6pZhipxcZTdmYRwlCLUlHVHn3x0+Dth8dvh7deEtSv7jTbS4mima4tVUyAo24Abhjmvmj/AIda+DP+hy17/v1D/wDE19sUVlRxlfDx5KUrIuph6VV8043Z8T/8OtfBn/Q5a9/36h/+Jo/4da+DP+hy17/v1D/8TX2xRW/9p4z/AJ+P8DL6nh/5D4n/AOHWvgz/AKHLXv8Av1D/APE19ZeHfA1v4c+GumeDYbmWW0sNJi0hLmQDzGRIREHIHGSBn0zXTUVz1sXXxCSqyvY2p0KdK7hGx8T/APDrXwZ/0OWvf9+of/iaP+HWvgz/AKHLXv8Av1D/APE19sUV0f2njP8An4/wMfqeH/kIrW3Frawwg7hGioCe+Bivj3xF/wAEz/CHiPxBqerTeLtbimv7qW6eOOKHarO5YgZXoCa+x6K5aOJq4dt0pWub1KNOskpq9j4n/wCHWvgz/octe/79Q/8AxNew/s4/sl6H+zdqmtX2ka5qGrPqkMcMi3qRgIEYkEbQPWvd6K2qY7E1oOE53TM4YWjTkpRjZnkf7Rn7OelftHeH9K0nVtVvNJh0+6N0klkqFmYoVwdwPGDXgf8Aw618Gf8AQ5a9/wB+of8A4mvtiilSxuIoR5Kc7IdTDUqkuacbs+c/2ff2KfD37PfjmbxPpXiHU9UuZbKSxMF4kYQK7Ixb5QDnKD866D9pL9lrRf2lv+Ed/tfWb/SP7F+0+V9iVG8zzvKzu3A9PKGMepr2yioeLruqqzl7y6lewpqHs+X3T4n/AOHWvgz/AKHLXv8Av1D/APE0f8OtfBn/AEOWvf8AfqH/AOJr7Yoro/tPGf8APx/gY/U8P/IRWtuLW1hhB3CNFQE98DFS0UV5h2mf4i0WLxJ4f1PSZ3eKC/tZbWR48blV0KkjPGcGvkT/AIdd/Dv/AKGjxP8A9/Lb/wCM19l0V1UcVWw91Sla5jUo061udXsfGn/Drv4d/wDQ0eJ/+/lt/wDGaP8Ah138O/8AoaPE/wD38tv/AIzX2XRXR/aWL/5+Mx+p4f8AkR8af8Ou/h3/ANDR4n/7+W3/AMZr6I+BfwU0n4B+Bv8AhFtFvb2/svtUl151+UMm5wuR8qqMfL6V6HRWNXGV68eSpO6NKeHpUnzQjZnl37QP7P2iftFeF9P0LXdQ1DTrayvBepJpzIHZwjpg71YYw57dhXgv/Drv4d/9DR4n/wC/lt/8Zr7Lop0sZiKMeSnNpCqYelUfNON2fGn/AA67+Hf/AENHif8A7+W3/wAZr6x8F+F7fwP4N0Hw5Zyyz2mj2Fvp8Ms5BkdIo1jVmwAMkKM4AGa2qKitiq2ISVWV7FU6FOk7wjYK8j/aM/Zz0r9o7w/pWk6tqt5pMOn3RukkslQszFCuDuB4wa9corGnUlSkpwdmjSUYzi4yWh8T/wDDrXwZ/wBDlr3/AH6h/wDia9//AGd/2cPDv7OXh3UNN0Se41C41CcT3N/eKolcAYRPlAG1fmIHqx9a9Zorpq43EV48lSd0Y08NRpy5oRswry79of4B6Z+0V4KsvDerand6Vb2uoJqCzWaqXLLHLGFO4EYxKT+Ar1GiuanUlTkpwdmjeUVNOMlofE//AA618Gf9Dlr3/fqH/wCJo/4da+DP+hy17/v1D/8AE19sUV3/ANp4z/n4/wADk+p4f+QxPA/haHwN4K8P+G7aaS5t9H0+30+KaUAPIsUaxhmxxkhcnFaeoafa6tYz2V7bRXdncIYpredA8ciEYKsp4II7GrFFea5Nvme52JJKx8kfE7/gm38PPGV5PfeHL++8GXUuSYLdRcWgY85ETEMP90OBjoBXly/8EqbzzAD8SoBHnlhorZx648/+tfoRRXpwzPGU1yxqffZ/mccsFh5u7ifKHwv/AOCcfw28EXkN9r89740vI8ERX2IbTcO/kpyfozsPavqmzs4NPtYbW1gjtraFBHHDCgREUDAVQOAAOwqaiuOtiKuIfNVlc6KdKFJWgrFTVtPXVtLvLF3MaXMLwll6gMpGR+dfGX/DrXwZ/wBDlr3/AH6h/wDia+2KKqjiq2Hv7KVrk1KNOtb2ivY+J/8Ah1r4M/6HLXv+/UP/AMTXvn7Of7Oelfs4+H9V0nSdVvNWh1C6F08l6qBlYIFwNoHGBXrlFaVcbiK0eSpO6Jp4alTlzQjZnM/ErwNb/EzwDrvhW7uZbO11a1a1knhALordSM8Z+tfJv/DrXwZ/0OWvf9+of/ia+2KKiji6+HTjSlZMqpQp1necbnxP/wAOtfBn/Q5a9/36h/8Aia+kfgH8E9P+APgP/hFtM1G61O1+1SXXn3aqHy4XI+UYx8tej0VVbGYivHkqzuhU8PSpPmhGzCvm749/sQ+Hfj94+bxVqniLVNMujax2vkWaRlNqZwfmBOfmr6RorCjWqUJc9N2ZpUpwqrlmro+J/wDh1r4M/wChy17/AL9Q/wDxNdL8Nv8Agnb4V+GnjzQvFNn4q1i7utJukuo4J44gjlT0OBnFfWdFdcsxxck4uo7M51hKEWmohXM/ErwNb/EzwDrvhW7uZbO11a1a1knhALordSM8Z+tdNRXBGTi1Jbo62k1ZnxP/AMOtfBn/AEOWvf8AfqH/AOJo/wCHWvgz/octe/79Q/8AxNfbFFej/aeM/wCfj/A4/qeH/kPif/h1r4M/6HLXv+/UP/xNH/DrXwZ/0OWvf9+of/ia+2KKP7Txn/Px/gH1PD/yHE/Bf4W2XwV+Guj+DNPvbjULPTfO2XN0FEj+ZM8pztGODIR9AK7aiivOlJzk5S3Z1xiopRWyPG/jL+yT8N/jhNLea5o5sdacYOsaWwguW4wC5wVk4A++rYxxXzXrn/BKu2kui+jfESWC37Q32lCVx771lUHt/CK++KK7aOPxNBctObt9/wCZz1MLRqu846nwBpn/AASpxcK2o/Ejdbg8x2uj4Zuv8TTEDt2NfRXwD/Y78D/s+6s+s6PNqWp69JA1u19f3AwI2ILKsaBVwSo6gnjrXutFVWzDFV48tSen3fkKnhKFJ80Y6hXn3x0+Dth8dvh7deEtSv7jTbS4mima4tVUyAo24AbhjmvQaK4YTlTkpxdmjplFSTjLZnxP/wAOtfBn/Q5a9/36h/8AiaP+HWvgz/octe/79Q//ABNfbFFeh/aeM/5+P8Dk+p4f+Q5n4a+Brf4Z+AdC8K2lzLeWuk2q2sc8wAd1XoTjjP0rpqKK86UnJuT3Z2JJKyCiiipGeaeK/gHofizxbeeI31bXtK1O7jjimbStRa2VlQYUEKOfxNZ//DN+lf8AQ4eNv/B9J/hXrdFAHh/wT8Dt8Ovir4/0Szm1SfQ1hsrmB9QmaUPNIHaZgxABYnGSOemat6b+y34d0Wxjs9P8SeLrCzjzst7bWnjjXJJOFUADJJP1Ney0UgPMtB+A2m+H9Zs9Si8UeLbqS1lWVYbzWZJYXIPR0I+Ye1dTH4B0uP4hS+MwZ/7Yk07+yyN48ryfMEn3cfe3Ac5rpKKYBXN+DvAOl+B5tel00zlta1GXVLrznDDzpDltvAwvHSukooA5zx54D0z4i6CNI1Yzi0E8dx/o7hG3I25eSDxmujoooA57RfA+m6D4t8R+I7Yzf2jr32b7ZvfKfuIzHHtGOPlJzyc10NFFABSMoZSrAFSMEHoaWigDx7Uv2Y/D66hc3nhrXfEXgdrli80Hh3UWt4HY4ydmDjp0BA9q2fAfwF8NeBdabXPM1DxB4hYbf7Y125NzcqORhSQAvBIyBnHGa9IooA4r4j/CfSPie2kvqd1qNlNpcjy20+m3PkSIzAAncAT0HauZ/wCGb9K/6HDxt/4PpP8ACvW6KAOP8OfDKx8OeF9V0IanrGqWmoiRZZdUvWuJlV02EIzDgY7epNbPhHwvZeCvDOnaFpxkNjYQiGHzm3PtHTJwMmteigAqpq+mQ63pN7p1xu+z3cD28mw4ba6lTg+uDVuigDI8I+F7LwV4Z07QtOMhsbCEQw+c259o6ZOBk1zfxE+C/hn4paxomoeIYJrptJZmhtxIBFJuKkrIuPmB2DjPrXd0UAIqhVCqAFAwAOgrCvPBen33jPTvE8hm/tKwtZbSEK4EeyQgtkY5PyjvW9RQAyWJJ42jkRZI2GGVhkEehFcLe/BPwnfeMrDxC2k2aPaW0tv9iW0h8iXeQd7rt5YY4Pua72igCG0s4LC3SC2gjtoE4WOFAqj6AVxXjv4LeGfiR4k0XWtet5rufSf9Rb7wIX+YNh1x8wyBxnFd3RQAnTgVgzeCtOn8cW3itjN/atvYvpyAOPL8pnDnK465A5zW/RQBzmneA9M0vxtq/iqEz/2pqkEVvcBnBj2xjC7VxwfxrW1rR7LxDpN3pmo20d3YXcbQzQSDKupGCKu0UAedaf8AAvQLHTfC+nSXmqX2n+G7w32n213ch1WQfcDfKCwTnaM8biOmAPRaKKAOc8beAtL8e2unRal50cmnXsWoWlxbOEkimjPysDg8cnIxzXP+OfgjovjzxTD4hudS1rS9UjshYCXSb422YQ7PtOBk/M2evYeleh0UAeSf8M36V/0OHjb/AMH0n+Fcx8M/h/L8Nf2jtW0zTrrWrrQLrw819LLqFw8ySXjXEali2ApfYvf5sZr6CopAcB8Nfgf4W+FV/qd9olvM19qLZmubqQSOFznYpwMLnnHfjPQV39FFMDkPCnwu0Xwb8P38Haebn+yHiniJmkDS7ZSxf5sf7RxxTPhh8JvDvwi0WfTfD1vJHHcS+dNPcPvllbGBubA4A6DoMnuTnsqKAM7xFodt4n8P6no95v8AseoWstpN5Zw2yRCjYPY4Jpnhfw7aeEfDum6JY+YbLT7dLaHzW3PsUADJxycCtSigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDwP9qi80r7FosUTwv4ogm8yBGXeUt2yrMwPygFgmCwPQ47mk+Hvx41/VvGmkaXrsOnppWpRyJDexqYW8yNSGJBc4BdGUBgp5U4HSt/8AaB8AjWNH/wCEkskI1HTYWEwjZlee36lBgEHnsykEEg14ZDpdx8StatdK0OZry6vESQzahdeZNZyRIFlYugA2upQ8bskY69PgcfVxOFzCU6bs5ONkvtJaa+b+H7nsj6zC06NfCKM+l9X9n0/P7z611/xJ4c020J1nUtNht+u27mTB+gJ5P0r5a+KHxE8M/wBvXep+G7u+1LWJLsXMdw4MVnbEeUMpGeWYrEEJIwQx9gPU/Dv7KPhixjWTWbu81m7bmT955MRPfAX5vzao/Geg+H/hzqVhbaFomh2MdtGl7dz36I88kPnIhjikmO1WILfMzYztGRnNdeYRx+Koc1aMacfnKS9Nl/WhzYOWFo1LU25v7l+rPL/hLDq/xE8VadpWsX98dGayjXNhIMKIAfKV2AOxvvejfN2zXo3x28eP4es5PD8mkhfD8caxLuukSS8kCgqqqSX8pCVLNg7mXbkc5zvGXx41PXbc2nhO3awgyI1ZGjZyxBOGkUtHGMBjhWLEKxygGa8F1DdJnUbueTUpp2IinuSzSXTjgvhufLU5Azyx69CF8Cvi44HDPD4ebnJ7ze1u1ne6v007dbP1qeHliayrVYqKW0fPvpbX7/w0qQ6vcwtHKIm8yBDAJNvKsRIEw3UY3HA/2B6ce/8A7PPxFg0uyttJt9Nujpk80cV1OGVha3chWNG658uQ7ByBtbPLZzXicccEWh6tZySYX+1LJJJCSRxHcq7g+mTkUyxubzTZnvrO4l0u/tZNtxNbsUkt3yF3nbyUY8HGcN/vBW8TAYqrgasaqd9+3ez/AAX3drXXo4qjDFU3Ta/r+n/Wx7J8XrjWfhh4xsYdP1efX47/ADdvZaoPOcRR5xCZGOWjPzHaMEkc7jXIeC/EGmeLpoYtY1uPRNTiaKMR3kQNleRp5Z2u2Pkcssm5z1EmM44Pc+D/AI1G7iTTfHNhDrEBCxF57ZHl6AhlAGyZCrK3ygNhgQHHNaNr4B8GeO/FlxZSeFRpmnXQdtM1KyaS1kkCKhkDwN93lztYqMhenQn6WVKWKqqrhKicW/glzaX9Lta9b2u7evjxn7CHJXhZpfEra/fb/OyuevaH4J8O6Kt1eaBp1naTXkW37RbAYKnoFI4C55wvFfHmradd+G77+zri+u2mWYW+y31N5AZFTDoNkRGS7KwHUKQDyc17Fr37L+oaTYzf8Ij4pvIgefsF45VJec4LJgduhTB9q4rwz8L9esoLnTbnw7dNrQd2jmYOIJdykbnb7pZCMoSVUMSd5zg7ZlDEYh06Tw/s7X1WsdbaaLd+djPBSo0lOaq897b6P8WcQEXUVeGK/ubmTYoljW/kUAiFYxvMsSqBvC9W4UbR0Br6t+A+h6noHw/t4tUW5ikmk8+KC6K7oY2RPlCrwo3BiF6jdzg5A4/4e/A3UYdU/tTXvKsmxGHt45DNLcFGU7pWLFSTsHIHO5jhTg17rXp5LllTDyeIraPa234bnFmWNhViqNPVBRRRX1588FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeU3nwl1Cz+KmneJ9MvIzZfaHkubdgsTRKUwVUqpMgJLHBIwcda9Wormr4eGIUef7LTXqjelWnRvy9VYK8S+Nmn3HiPXZ7eBrG2ewsoUF1qJAihjunmWWTGCXP7iONVweZScZAI9trlPE/w503xdrlnqOoNIyW9rNam2UgJKJFK5f12hnx6Fs1hjqEsRR9nHq/T8fLfvoa4WrGjU55f1/w+3zPl610+SeCztp7ptOPhOYQzwafYCUNO88yu8mXQYKwxKWY4+YAkCuZX7NJJd6raxvDDZzTSxxSTea1vHF5a26A918yZM+oX2OfoiP4I6rF4wTWo7qCLUVCqdWW5kUSgYG97ZVXMhAGf3oQnJK9q4DxF4I1u08cXtzqdnbxxX0K2199ktnjEgDq4nh2qyud8cbbB83G0rzuP59iMtr04JuPW1/TRN9rJJNLRrW7sfW0cZTnJpS6X/wA1+bV9eljw95nsdPvtMmiZJzcxu2f4DGJFKkeuX/SukdUgjGpTNLbvNHHJPsVfNeMloLlcNwWLDcAem7tUmoeE57jxVPfSJdLorzvcSX01spIUS7G3RbwN2/jytwbkDHNdjZaFL4g8d2SWFrY63Z2fm+VbTOkv2uV3dzJLDG5MSB3B2yMMKoBJbIPgYbCVeZxt1tH73Z6dNW79dkenVrQsn83/AJFK4ht7GbX5priz1bR54m077AyTRvayQQMbcEuijzFEOzKM3LHPDc+k/BbwzeeDfEWkRappyWc3+k6dGY5PNikcr5plVgTiT9w8bjttQYXGKsap8INe1HxNp95eWZvPsTGS3s4bhE0mN+CpCk+aiggZQI2cAbwOnf8Ahn4Yv4e8TWmqPqLXcUVo4khZNoa9cr5tyPQuq4x298mvt8Dl1WGI9pKGz06aN3e93a+1nv6nzmKxlOVLkUt1+llt/l+R3tFFFfcnywUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGBJ4E0ObX/7ZewVr7eJeXbyzIBgSmPOwyAcb8bsd636KKiNOEL8qtcqUpStzO9goooqyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==',
					width: 250,
					alignment: 'left',
					margin:[-10,0, 0,0],
				},
				{
					width: 170,
					margin:[0,20, 0,0],
					text: '',
				},
				{
					
					width: 150,
					text: 'Накладная \n №'+today,
					alignment: 'left',
					margin:[0,20, 0,0],
					fontSize:10,
					color: '#1d457d'
				}
			]
		},
		

		  {
			style: 'tableExample',
			color: '#000',
			bold:false,
			table: {
				widths: [120, 120, 120, 120],
				headerRows: 3,
				// keepWithHeaderRows: 1,
				body: [
					[
					    { fontSize:8, text: 'Отправитель', color: '#fff', fillColor: '#1e457e', alignment: 'center'}, 
					    { fontSize:8, text: '\n\n+7 (000) 000-00-00', rowSpan: 2,  alignment: 'center'}, 
					    { fontSize:8,  color: '#1d457d', text: '\nДата отправки', rowSpan: 2,  alignment: 'center'}, 
					    { fontSize:8, text: '\n05.10.2018', rowSpan: 2, alignment: 'center'}, 
					],
					
					[
					    { fontSize:8, text: 'Иванов Иван Иванович', alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}
					],
					
					[
					    { fontSize:8, text: 'Организация: ООО Транс',colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}, 
					    { fontSize:8,  color: '#1d457d', text: 'Предварительная дата доставки',rowSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '\n06.12.2018',rowSpan: 2, alignment: 'center'}
					],
					
					[
					    { fontSize:8, text: 'Москва ул. ленина д2',colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', alignment: 'center'}
					],		
					[
					    { fontSize:8, text: 'Подпись \nотправителя',  color: '#1d457d', rowSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', style: 'tableHeader', rowSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: 'Прием отправления', color: '#fff', fillColor: '#1e457e', colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}
					],	

					[
					    { fontSize:8, text: '',  alignment: 'center'}, 
					    { fontSize:8, text: '', rowSpan: 2,  alignment: 'center'}, 
					    { fontSize:8, text: 'ФИО сотрудника',  alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					[
					    { fontSize:8, text: 'Получатель',  color: '#fff', fillColor: '#1e457e', alignment: 'center'}, 
					    { fontSize:8, text: '\n+7 (000) 000-00-00',  rowSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: 'Дата, время прииема',  alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
			///////////////////////8///
					[
					    { fontSize:8, text: 'Петро Петр Петрович',  alignment: 'center'}, 
					    { fontSize:8, text: '',  alignment: 'center'}, 
					    { fontSize:8, text: 'Данные получателя',   colSpan: 2, color: '#fff', fillColor: '#1e457e', alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					
					[
					    { fontSize:8, text: 'Организация: ООО ТОРГ', colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					    { fontSize:8, text: 'ФИО',  alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					
				    [
					    { fontSize:8, text: 'Россия краснодар ул, Коммунаров 296', colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					    { fontSize:8, text: 'Должность',  alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					
					[
					    { fontSize:8, text: 'Дата, время получения', alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					    { fontSize:8, text: '',  alignment: 'center', colSpan: 2, rowSpan: 2}, 
					    { fontSize:8, text: '', alignment: 'center', rowSpan: 2}, 
					],
					[
					    { fontSize:8, text: 'Подпись \nполучателя', color: '#1d457d',  alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					    { fontSize:8, text: '',  alignment: 'center', colSpan: 2}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					[
					    { fontSize:8, text: 'Способ оплаты', color: '#fff', fillColor: '#1e457e', colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center',  colSpan: 0}, 
					    { fontSize:8, text: 'Стоимость доставки', color: '#fff', fillColor: '#1e457e', colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					[
					    { fontSize:8, text: '',  colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center',  colSpan: 0}, 
						{ fontSize:8, text: '',  colSpan: 2, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
					[
					    { fontSize:8, text: 'Описание вложения', color: '#fff', fillColor: '#1e457e', colSpan: 4, alignment: 'center'}, 
					    { fontSize:8, text: '', alignment: 'center',  colSpan: 0},
					    { fontSize:8, text: '',  alignment: 'center',colSpan: 0},
					    { fontSize:8, text: '', alignment: 'center'}, 
					],
				]
			},
			
			layout: {
			hLineWidth: function (i, node) {
				return (i === 0 || i === node.table.body.length) ?  0.5 :  0.5;
			},
			vLineWidth: function (i, node) {
				return (i === 0 || i === node.table.widths.length) ? 0.5 :0.5;
			},
			hLineColor: function (i, node) {
				return (i === 0 || i === node.table.body.length) ? '#1e457e' : '#1e457e';
			},
			vLineColor: function (i, node) {
				return (i === 0 || i === node.table.widths.length) ? '#1e457e' : '#1e457e';
			},
			// paddingLeft: function(i, node) { return 4; },
			// paddingRight: function(i, node) { return 4; },
			// paddingTop: function(i, node) { return 2; },
			// paddingBottom: function(i, node) { return 2; },
			// fillColor: function (i, node) { return null; }
		}
		},
		{
			alignment: 'justify',
			margin:[0,20, 0,20],
			columns: [
				{
					text: `1.	Общие положения и термины.
					Заказчик - лицо, обратившееся с заявкой на оказание услуг по перевозке Груза к Исполнителю. Груз - товар, имущество или документы согласно заявке, подлежащие перевозке по одной накладной, любым доступным и удобным для Исполнителя способом, в том числе с привлечением третьих лиц. Грузоотправитель - лицо, сдавшее груз к перевозке и указанное в качестве отправителя в транспортном документе. Представитель отправителя должен иметь доверенность, подтверждающую его полномочия и право подписи. Грузоперевозчик - лицо, непосредственно осуществляющее перевозку груза. Исполнитель - МЕЖРЕГИОНТЕСТ. Грузоотправитель и/или Заказчик, от своего имени, от имени получателя Груза (Грузополучателя) или от имени любых иных лиц, заинтересованных в доставке Груза, выражает свое согласие на применение данных условий доставки МЕЖРЕГИОНТЕСТ путем направления заявки на перевозку груза. Накладная - это транспортная накладная и/или иной документ- идентификатор груза, а также электронная версия документа, изготавливаемого автоматизированными системами и/или сотрудниками грузоперевозчика. Перевозка любых грузов осуществляется по принципу ограниченной ответственности в соответствии с условиями доставки.
					Полный перечень условий представлен на сайте межрегионтест.рф. Заказчик подтверждает свое ознакомление с условиями доставки направления заявки на перевозку груза.
					К доставке принимаются грузы весом до 30 (тридцати) килограмм, с габаритами, не превышающими 120см х 80см х 80см. Доставка грузов с весом или габаритами, превышающими вышеуказанные (крупногабаритные и тяжеловесные грузы), осуществляется Исполнителем при наличии такой возможности и при условии взаимного согласования сторонами условий такой доставки.
					\n2.	Упаковка груза.
					Грузы, в том числе документы, предназначенные для перевозки, должны иметь тару и/или упаковку. Характер упаковки должен соответствовать содержимому груза и весу, т.е. обеспечивать полную сохранность содержимого, а также исключать возможность повреждения содержимого и других грузов, при обычных мерах обращения.
					Допустимые виды внешней тары и/или упаковки - картонный конверт, полиэтиленовый конверт, тубус, коробка для бутылок, деревянная коробка для бутылок, картонная коробка, деревянный ящик, паллета.
					\n3.	Грузы, неприемлемые к перевозке.
					Груз является неприемлемым для перевозки в том случае, если:
					-	неверно указаны данные грузоотправителя и/или грузополучателя;
					-	на него отсутствует таможенная декларация, если ее наличие предусматривается соответствующими таможенными правилами;
					-	груз запрещен или ограничен в обороте на территории Российской Федерации и иных государств, по территории которых будет осуществлена перевозка груза. Не принимаются к перевозке: животные, в том числе млекопитающих, рептилий, пауков, рыб и птац; золото и серебро в слитках, наличные деньги: банкноты и монеты; драгоценные камни, ювелирные изделия из драгоценных/полудрагоценных металлов и камней; огнестрельное и холодное оружие, взрывчатые вещества и боеприпасы; человеческие останки, прах; запрещенные вложения, включая слоновую кость, пиратские копии соответствующих товаров, наркотики, а также курительные смеси; электронные сигареты и их составные части, скоропортящиеся грузы, в том числе продукты питания и напитки; грузы, относящиеся к категории опасных веществ или грузов, а также в случае, если в их отношении действуют запреты или ограничения, предусмотренные международными организациями; грузы, которые содержат иные вложения, в отношении которых, по мнению Исполнителя, не может быть обеспечена безопасность или законность перевозки.
					ость содержимого, в случае отсутствия повреждения упаковки.
					`,
					fontSize:6.2,
					bold:false,
				},
				{
					text: `При транспортировке груз может быть досмотрен уполномоченными органами в соответствии с законодательством РФ.
					При отправлении груза, важно заполнить все внутреннее пространство коробки, для исключения смещения груза при транспортировке. При выборе материала, которым будет заполнено свободное пространства, убедитесь, что материал выдерживает вес груза, для исключения уменьшения объема данного материала. Расположите выбранный материал на дне коробки и со всех сторон груза.
					При отправлении нескольких грузов в одной коробке, необходимо упаковать каждый груз индивидуально.
					При отправлении мелких грузов, их следует поместить в специальный контейнер или пластиковый пакет, чтобы избежать их смещение.
					При отправлении грузов в виде порошка и жидкости, убедитесь в том, что они не являются опасными и/или запрещенными к транспортировке.
					Если отправляемый груз не является опасным и/или запрещенным к транспортировке, то он нуждается в особой упаковке во избежание его порчи или потери.
					Жидкости должны находиться в герметичной таре и быть защищенными прочным материалом по всей площади тары.
					Порошки и гранулированные вещества должны быть упакованы в герметичные и прочные пластиковые пакеты.
					\n4.	Права Исполнителя.
					Исполнитель оставляет за собой право на досмотр груза без уведомления Заказчика, гарантируя целостность тары и/или упаковки. Исполнитель вправе удерживать находящийся у него груз до оплаты вознаграждения за оказываемые услуги и/или возмещения убытков, связанных с транспортировкой груза. Исполнитель вправе осуществить доставку груза любым удобным для него способом, а так же прибегнуть к помощи третьих лиц. Исполнитель вправе отказаться от исполнения услуги по транспортировке груза, в том числе документов, при недостаточном количестве или недостоверности информации о грузе.
					\n5.	Обязанности исполнителя.
					При заборе груза Исполнитель обязан подписать и передать Заказчику один экземпляр накладной, которая подтверждает достижение Заказчиком и Исполнителем согласия по всем существенным условиям экспедиторских услуг, и подтверждает факт передачи груза от Заказчика к Исполнителю. Исполнитель обязан сообщить Заказчику о нехватке информации, документов для осуществления перевозки груза, а также о любых обстоятельствах, препятствующих осуществлению перевозки груза, возникших с момента получения заявки на перевозку груза до момента передачи груза Грузополучателю.
					\n6.	Обязанности Заказчика.
					Заказчик обязан подписать транспортную накладную, своевременно оплатить услуги Исполнителя, включая услуги по страхованию грузов, а также иные услуги, которые были согласованны обеими сторонами. В случае, если Заказчик оформляет заказ на доставку груза с оплатой услуг Исполнителя грузополучателем или третьей стороной, то он гарантирует своевременную оплату и обязуется возместить стоимость услуги, при необоснованном отказе со стороны плательщика.
					\n7.	Ответственность Исполнителя.
					Исполнитель несет ответственность за утрату и/или порчу груза в размере объявленной ценности. Объявленная ценность груза не может превышать 3000 руб.
					Исполнитель принимает и сдает грузы по количеству мест без пересчета/сверки внутреннего содержимого. Исполнитель не несет ответственность за сохранность содержимого, в случае отсутствия повреждений упаковки.
					`,
					fontSize:6.2,
					bold:false,
				}
			],
			
		},



	],
	
	styles: {
		content: {
			fontSize:8,
			bold:false,
			alignment:'justify',
			
		}
	},
	defaultStyle: {
		columnGap: 15,
		bold:false,
	}
}

//pdfMake.createPdf(docInfo).download('name.pdf');