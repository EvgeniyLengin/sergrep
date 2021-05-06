<?php

	/** Класс пользовательских макросов */
	class ContentCustomMacros {

		/** @var content $module */
		public $module;

		function buykeysmessage(){
			print_r(file_exists("SendMailSmtpClass.php"));

				require_once "SendMailSmtpClass.php";


	$table = $_POST['massjson'];
	$decodeTable = json_decode($table,true);

	print_r($_POST);
	echo "MASSIVE";
	echo "<pre>";
	print_r($decodeTable);
	echo "</pre>";
	$fullName = $_POST['fio'];
	$Position = $_POST['position'];
	$dateCurrent = $_POST['data_z'];
	$quantity = $_POST['quantity'];
	// print_r($dateCurrent);
	$dateCurrent = explode(".", $dateCurrent);
	$oplata = $_POST['oplata'];
	// print_r($dateCurrent[0]);
	// print_r($dateCurrent[1]);
	// print_r($dateCurrent[2]);




	$phpWord = new \PhpOffice\PhpWord\PhpWord();
	function m2t($millimeters){
	  return floor($millimeters*56.7); //1 твип равен 1/567 сантиметра
	}//m2t
	//Создаем нвоый док
	$phpWord = new \PhpOffice\PhpWord\PhpWord();
	$phpWord->setDefaultFontName('Times New Roman');
	$phpWord->setDefaultFontSize(8);


	// Adding an empty Section to the document...

	$sectionStyle = array(
               'marginLeft' => m2t(15), //Левое поле равно 15 мм
               'marginRight' => m2t(15),
               'marginTop' => m2t(15),
               'borderTopColor' => 'C0C0C0'
         );
	$section = $phpWord->createSection($sectionStyle);
	// Adding Text element to the Section having font styled by default...

	$fontStyle = array('color'=>'black', 'size'=>11, 'bold'=>true);

	$section->addText('Директору ООО ЧОП «СЕРЖ»  Вишняковой Е.В.', $fontStyle, array('align'=>'center')); //Массив с параметрами форматирования передается при создании

	$section->addTextBreak(3);


	$section->addText('Заказчик:    '.$fullName.'                ', array('underline' => 'single','size' => '10'), array('align'=>'right' ));
	$section->addTextBreak(1);
	$section->addText('В лице:     '.$Position.'                ', array('underline' => 'single','size' => '10'), array('align'=>'right' ));
	$section->addTextBreak(1);

	$textrunDate = $section->createTextRun( array('align' => 'right'));
	$textrunDate->addText('«', array(
	'bold' => false,
	'size' => '11',

	));
	$textrunDate->addText('  '.$dateCurrent[0].'   ', array(
    'bold' => false,
	'size' => '11',
	'underline' => 'single',
	));
	$textrunDate->addText('»', array(
	'bold' => false,
	'size' => '11',

	));
	$textrunDate->addText('          '.$dateCurrent[1].'            ', array(
	'bold' => false,
	'size' => '11',
	'underline' => 'single',
	));
	$textrunDate->addText(' ', array(
	'bold' => false,
	'size' => '11',

	));
	$textrunDate->addText(' '.$dateCurrent[2].' г.', array(
	'bold' => false,
	'size' => '11',
	'underline' => 'single',
	));
	$section->addTextBreak(3);

	$section->addText('Заявление', array('bold' => true, 'size' => '12'), array('align' => 'center'));
	$section->addTextBreak(2);
	$phpWord->addParagraphStyle('pStyle', array(
    'align' => 'left',
    'spaceBefore' => 10, // отступ сверху
    'spaceAfter' => 100, // отступ снизу
    'spacing' => 100, // межстрочный интервал
	));
	$textrun = $section->createTextRun('pStyle');
	$textrun->addText('Прошу изготовить', array(
    'bold' => false,
	'size' => '11'
	));
	$textrun->addText('     '.$quantity.'     ', array(
    'italic' => false,
	'underline' => 'single',
	'size' => '11'
	));
	$textrun->addText(' ключ(ей)', array(
    'size' => '11'
	));
	$textrun->addText(' и назначить ответственных за них лиц:', array(
	'size' => '11'
	));
	$section->addTextBreak(1);

	$styleTable = array('borderSize' => 6, 'borderColor' => 'black',
	'cellMarginTop' => 40,
    'cellMarginRight' => 20,
    'cellMarginBottom' => 40,
    'cellMarginLeft' => 20,
	);

	$cellHCentered = array('align' => 'center','valign' => 'center');
	$cellVCentered = array('valign' => 'center','align' => 'center');

      $phpWord->addTableStyle('styletablecustom', $styleTable);
      $table = $section->addTable('styletablecustom');
      $table->addRow(null, array('tblHeader' => true));
      $table->addCell(2000, $cellVCentered)->addText('№ ключа', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('ФИО', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('должность', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('адрес', array('bold' => true,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText('телефон', array('bold' => true,'valign' => 'center'), $cellHCentered);



	  // берем в учет, что последняя строка таблицы будет обрезаться. Добавляем внизу фейк row
	  foreach ($decodeTable as $key => $value) {
		 $table->addRow(null,array('bold' => false,'valign' => 'center'));
  		$table->addCell(2000, $cellVCentered)->addText($value['kolichestvo'], array('bold' => false,'valign' => 'center'), $cellHCentered);
  		$table->addCell(2000, $cellVCentered)->addText($value['FIO'], array('bold' => false,'valign' => 'center'), $cellHCentered);
  		$table->addCell(2000, $cellVCentered)->addText($value['position'], array('bold' => false,'valign' => 'center'), $cellHCentered);
  		$table->addCell(2000, $cellVCentered)->addText($value['address'], array('bold' => false,'valign' => 'center'), $cellHCentered);
		$table->addCell(2000, $cellVCentered)->addText($value['telephone'], array('bold' => false,'valign' => 'center'), $cellHCentered);

	  }
	  // Последнюю строчку php word почему-то обрезает, поэтому, добавляем фейковую, чтобы обрезало ее.
	  $table->addRow(null,array('bold' => false,'valign' => 'center'));
	  $table->addCell(2000, $cellVCentered)->addText(' ', array('bold' => false,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText(' ', array('bold' => false,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText(' ', array('bold' => false,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText(' ', array('bold' => false,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText(' ', array('bold' => false,'valign' => 'center'), $cellHCentered);

	  $section->addTextBreak(2);

	  $textrunMany = $section->createTextRun('pStyle');
	  $textrunMany->addText('Оплата будет произведена (наличный или безналичный расчет) ', array(
		  'bold' => false,
		  'size' => '11'
		  ));
  		$textrunMany->addText('  '.$oplata.'     ', array(
		 'bold' => false,
		 'size' => '11',
		 'underline' => 'single',
		 ));
	  $textrun2 = $section->createTextRun('pStyle');
	  $textrun2->addText('Заказчик: ', array(
	  'bold' => false,
	  'size' => '11'
	  ));
	  $textrun2->addText('  '.$fullName.'   ', array(
	 'bold' => false,
	 'size' => '11',
	 'underline' => 'single',
	 ));
	 $textrun2->addText('   ', array(
	   'bold' => false,
	   'size' => '11',
	   ));
   	 $textrun2->addText('/                ', array(
	  'bold' => false,
	  'size' => '11',
	  'underline' => 'single',
	  ));
	  $textrun2->addText('          ', array(
 	   'bold' => false,
 	   'size' => '11',
 	   ));
	   $textrun2->addText('«', array(
   	'bold' => false,
   	'size' => '11',

   	));
   	$textrun2->addText('  '.$dateCurrent[0].'   ', array(
       'bold' => false,
   	'size' => '11',
   	'underline' => 'single',
   	));
   	$textrun2->addText('»', array(
   	'bold' => false,
   	'size' => '11',

   	));
   	$textrun2->addText('          '.$dateCurrent[1].'            ', array(
   	'bold' => false,
   	'size' => '11',
   	'underline' => 'single',
   	));
   	$textrun2->addText(' ', array(
   	'bold' => false,
   	'size' => '11',

   	));
   	$textrun2->addText(' '.$dateCurrent[2].' г.', array(
   	'bold' => false,
   	'size' => '11',
   	'underline' => 'single',
   	));

   	$section->addTextBreak(1);
   $textrun3 = $section->createTextRun('pStyle');
   $textrun3->addText('                            М.П.                  ', array(
   'bold' => false,
   'size' => '11'
   ));




	// echo "<pre>",var_dump($section),"</pre>";
	// die();

	// Saving the document as OOXML file...
	$objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
	$filename = 'NewStatement'.date("d_m_Y").'.docx';
	$objWriter->save($filename);


		$mailSMTP = new SendMailSmtpClass('SergNewFile@yandex.ru', 'serGserg219', 'ssl://smtp.yandex.ru', 465, "UTF-8");

					// от кого
			$from = array(
			    "SergInfo", // Имя отправителя
			    "SergNewFile@yandex.ru" // почта отправителя
			);
			// кому
			$to = 'ze@german-web.ru, a.test@german-web.ru';
			$mailSMTP->addFile($filename,$filename);
			// отправляем письмо
			$result =  $mailSMTP->send($to, 'Новая заявка!', 'new file '.date("d_m_Y").'', $from);
			// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');

			if($result === true){
			    echo "Done";
				unlink($filename);
			}else{
			    echo "Error: " . $result;
			}













die('stop');



















		}
	}
