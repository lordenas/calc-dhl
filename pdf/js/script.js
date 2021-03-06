
var zakazchik = 'ООО СтройнеСтройМегоСтрой'
var vlice = 'Иванов Иван Аристархович'
var docInfo = {
	
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
			text:'нижний колонтитул',
			alignment:'center',//left  right
		}
	],
	
	content: [
	
		{
			text:'ДОГОВОР №_______________',
			fontSize:14,
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
					margin:[0,30, 0,0],
					alignment: 'left'
				},
				{
					width: '50%',
					text:'«____»______________201________г',
					margin:[0,30, 0,0],
					alignment: 'right'
				},
				

			
			],
			columnGap: 20
		},
		{
			text:'Общество с ограниченной ответственностью «ЦЕНТР СЕРТИФИКАЦИИ И ИСПЫТАНИЙ»,  именуемое в дальнейшем  «Исполнитель»,  в лице Генерального директора Устименко Виктории Андреевны, действующего на основании Устава, с одной стороны, и "' + zakazchik + '" именуемое в дальнейшем «Заказчик», в лице ' + vlice + ' действующего на основании ______________________________, с другой стороны, заключили настоящий Договор о нижеследующем:',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,30, 0,30]
			//pageBreak:'after'
		},
		{
			text:'1. ПРЕДМЕТ ДОГОВОРА.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
		{
			text:'1.1.	Заказчик поручает, а Исполнитель принимает на себя обязательства по предоставлению услуги по экспресс-доставке корреспонденции на условиях настоящего Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'1.2.	Порядок оказания Исполнителем услуги установлен в «Условиях перевозки корреспонденции» и размещен на сайте Исполнителя в сети Интернет по адресу:___________________________. Подписывая Договор Заказчик подтверждает факт ознакомления с порядком оказания услуг.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,5]
			//pageBreak:'after'
		},
		{
			text:'2.  ПРАВА И ОБЯЗАННОСТИ СТОРОН.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
		{
			text:'2.1. Исполнитель обязуется предоставить Заказчику следующие услуги:',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.1. Исполнить поручение Заказчика, предусмотренное п.1.1. настоящего Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.2. Получить и обработать информацию для оформления услуги по экспресс-доставке корреспонденции.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.3. Провести поиск вариантов отправки корреспонденции и предоставить Заказчику для выбора необходимую информацию об отправке способом, указанным в заявке Заказчика, заполненной Заказчиком на сайте Исполнителя в сети Интернет по адресу:___________________________.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.4. Консультирование отправителя по формированию заявочной документации, срокам  доставки и местам выдачи.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.5. По согласованию с Заказчиком провести оформление услуги.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.6. Ведение и хранение полного архива Заказчика, включающего в себя сведения о предыдущих заказах, а также иную информацию для выполнения новых заказов.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.7. Немедленно извещать Заказчика обо всех изменениях и обстоятельствах, препятствующих выполнению заказа.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.1.8. Подготовить документы для отчетности и  в указанные сроки оказать услугу',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2. Заказчик обязуется:',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.1. Размещать все заказы на услуги, предусмотренные настоящим Договором через Исполнителя, за исключением случаев, когда Исполнитель не имеет возможности предоставить соответствующую услугу.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.2. Своевременно направлять Исполнителю заказы на услуги с указанием всех необходимых данных и соответствующих документов.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.3. Следовать нормам и требованиям, содержащимся в «Условиях по перевозке корреспонденции».',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.4. Своевременно осуществлять расчеты с Исполнителем  в соответствии с разделом 3 настоящего Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.5. Оплачивать Исполнителю стоимость оказанных услуг согласно выставленным счетам.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.6. При изменении стоимости услуг по независящим от Исполнителя причинам, доплачивать разницу стоимости. Исполнитель в данном случае обязан предоставить официальные документы, подтверждающие необходимость доплаты со стороны Заказчика.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.7. Заказчик несет полную ответственность за информацию, переданную Исполнителю.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.8. Обеспечить доступ Исполнителя к содержимому отправки и ее упаковке. Исполнитель не несет ответственности за внутреннюю недостачу содержимого отправки или порчу имущества для доставки и доставленного Получателю при условии сохранения целостности внешней упаковки. Исполнитель не несет ответственности за утрату дохода, прибыли, непредвиденных расходов Заказчика, возникших в результате утраты, повреждения или несвоевременной доставки отправления.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.2.9. Самостоятельно информировать Получателя о месте и времени получения отправления.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.3. Заказчик имеет право:',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.3.1. Предъявлять обоснованные претензии к Исполнителю в соответствии со сроком и процедурами, предусмотренными законодательством РФ.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4. Исполнитель имеет право:',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.1. Проверять правильность объема и веса, указанного Заказчиком в форме заказа на специальном оборудовании в своем офисе. Если обнаруживается расхождение между заявленным объемом и весом в результате проверки, то за основу определения стоимости услуги берется наибольшее значение веса отправления.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.2. Изменять тарифы, сроки доставки, порядок и сроки оплаты.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'2.4.3. Привлекать к исполнению своих обязанностей третьих лиц. Возложение обязанностей на третьих лиц не освобождает Исполнителя от ответственности перед Заказчиком. Если нарушение обязательств Исполнителя по настоящему  Договору вызвано ненадлежащим исполнением обязательств третьими лицами, ответственность Исполнителя перед Заказчиком определяется по тем же причинам, по которым третье лицо отвечает перед Исполнителем. При этом размер ответственности Исполнителя не может быть ниже предела, установленного законодательством о перевозках соответствующим видом транспорта.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3. ПОРЯДОК РАСЧЕТОВ.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
		{
			text:'3.1. Заказчик производит оплату Исполнителю с момента получения счета от Исполнителя в течение 3-х банковских дней.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.2. Заказчик производит  оплату  заказанных услуг по безналичному расчету.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.3. Не позднее 5-го числа месяца, следующего за отчетным, Заказчик и Исполнитель подписывают Акт сверки взаиморасчетов.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'3.4. Погашение выявленной дебиторской задолженности Заказчик производит в течение 2-х дней со дня подписания Акта.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4. ОТВЕТСТВЕННОСТЬ СТОРОН.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
		{
			text:'4.1. Заказчик несет ответственность за аннуляцию услуги и обязуется в случае наступления штрафных санкций оплатить их в соответствии с условиями поставщика услуги, а также с реально понесенными расходами Исполнителя.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4.2. В случае просрочки оплаты счетов по вине Заказчика более чем на 3 (три) рабочих дня, Исполнитель вправе требовать от Заказчика уплаты пени в размере 0,05% за каждый день просрочки оплаты.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'4.3. Исполнитель несет ответственность за неправильное оформление Исполнителем документации, нарушения установленного порядка оказания услуг, или иных случаев, за исключением случаев предоставления неверной информации самим Заказчиком. Ни при каких обстоятельствах не компенсируется Заказчику упущенная выгода.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'5. ОБСТОЯТЕЛЬСТВА НЕПРЕОДОЛИМОЙ СИЛЫ.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},

		{
			text:'5.1. Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящему Договору, если оно явилось следствием обстоятельств непреодолимой силы, т.е. чрезвычайных или непредотвратимых обстоятельств (такие как стихийные бедствия, действия государственных органов, забастовки, мятежи и войны), если эти обстоятельства непосредственно повлияли на исполнение настоящего Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},

		{
			text:'5.2. Обязательство доказывания наступления обстоятельств непреодолимой силы (на основании предоставления свидетельства компетентного органа) возлагается на Сторону, ссылающуюся на такие обстоятельства.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'5.3. Если обстоятельства непреодолимой силы или их последствия будут длиться более одного месяца, каждая из Сторон вправе расторгнуть настоящий Договор.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6. СРОК ДЕЙСТВИЯ И ПРЕКРАЩЕНИЕ ДОГОВОРА.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
		{
			text:'6.1. Настоящий  Договор  заключен  на  неопределенный  срок и вступает в силу со дня подписания его уполномоченными представителями Сторон.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.2. Настоящий Договор подлежит расторжению по инициативе любой из Сторон путем направления письменного уведомления другой Стороне в срок, не менее чем за 30 (Тридцать) календарных дней до даты предполагаемого расторжения Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.3. Настоящий Договор может быть расторгнут Исполнителем в одностороннем порядке в случае, если в течение 6 (шести) месяцев Заказчик не оформляет заказы на услуги Исполнителя.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.4. Заказчик имеет право в одностороннем порядке расторгнуть Договор, письменно уведомив об этом Исполнителя, в случае несогласия с изменением размера стоимости услуг.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.5. Все споры и разногласия между сторонами разрешаются в установленном законом порядке в Арбитражном суде по месту нахождения истца.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.6. Во всем остальном, что не предусмотрено условиями настоящего Договора, Стороны руководствуются действующим законодательством РФ.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.7. Все изменения и дополнения к настоящему Договору принимаются Сторонами в письменном виде, заверяются уполномоченными представителями Сторон и оформляются в виде дополнительных соглашений и приложений, которые считаются неотъемлемыми частями настоящего Договора.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'6.8. Настоящий Договор составлен в двух экземплярах, имеющих равную юридическую силу, по одному для каждой из Сторон.',
			fontSize:11,
			width: 'auto',
			alignment: 'left',
			margin:[0,5, 0,0]
			//pageBreak:'after'
		},
		{
			text:'7.  ЮРИДИЧЕСКИЕ АДРЕСА И БАНКОВСКИЕ РЕКВИЗИТЫ СТОРОН.',
			fontSize:14,
			width: 'auto',
			bold: true,
			alignment: 'center',
			margin:[0,10, 0,10]
			//pageBreak:'after'
		},
	],
	
	styles: {
		header: {
			fontSize:25,
			bold:true,
			alignment:'right'
		}
	}
}

pdfMake.createPdf(docInfo).download('name.pdf');