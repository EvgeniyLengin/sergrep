<?php

	/** Класс пользовательских макросов */
	class ContentCustomMacros {

		/** @var content $module */
		public $module;

		function buykeysmessage(){




			$table = $_POST['massjson'];
			$decodeTable = json_decode($table,true);

			print_r($_POST);

			$fullName = $_POST['fio'];
			$Position = $_POST['position'];
			$dateCurrent = $_POST['data_z'];
			$quantity = $_POST['quantity'];

			$phpWord = new \PhpOffice\PhpWord\PhpWord();
			function m2t($millimeters){
			  return floor($millimeters*56.7); //1 твип равен 1/567 сантиметра
			}//m2t
	//Создаем нвоый док
	$phpWord = new \PhpOffice\PhpWord\PhpWord();
	$phpWord->setDefaultFontName('Times New Roman');
	$phpWord->setDefaultFontSize(8);

	$sectionStyle = array('orientation' => 'landscape',
               'marginLeft' => m2t(15), //Левое поле равно 15 мм
               'marginRight' => m2t(15),
               'marginTop' => m2t(15),
               'borderTopColor' => 'C0C0C0'
         );
	// Adding an empty Section to the document...
	$section = $phpWord->addSection($sectionStyle);
	// Adding Text element to the Section having font styled by default...

	$fontStyle = array('color'=>'black', 'size'=>11, 'bold'=>true);

	$section->addText('Директору ООО ЧОП «СЕРЖ»  Вишняковой Е.В.', $fontStyle, array('align'=>'center')); //Массив с параметрами форматирования передается при создании

	$section->addTextBreak(3);


	$section->addText('Заказчик:    '.$fullName.'                ', array('underline' => 'single','size' => '10'), array('align'=>'right' ));
	$section->addTextBreak(2);
	$section->addText('В лице:     '.$Position.'                ', array('underline' => 'single','size' => '10'), array('align'=>'right' ));
	$section->addTextBreak(2);
	$section->addText('  '.$dateCurrent.'г.', array('underline' => 'single','size' => '10'), array('align'=>'right' ));
	$section->addTextBreak(11);

	$section->addText('Заявление', array('bold' => true), array('align' => 'center'));
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
	$textrun->addText('  '.$quantity.' ', array(
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
      $table->addRow(null,array('tblHeader' => true));
      $table->addCell(2000, $cellVCentered)->addText('№ ключа', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('ФИО', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('должность', array('bold' => true,'valign' => 'center'), $cellHCentered);
      $table->addCell(2000, $cellVCentered)->addText('адрес', array('bold' => true,'valign' => 'center'), $cellHCentered);
	  $table->addCell(2000, $cellVCentered)->addText('телефон', array('bold' => true,'valign' => 'center'), $cellHCentered);
	  echo "MASSIVE";
	  echo "<pre>";
	  print_r($decodeTable);
	  echo "</pre>";
	  foreach ($decodeTable as $key => $value) {
		  $table->addRow([]);
    	  $table->addCell(2000, $cellVCentered)->addText($value['kolichestvo'], array('bold' => false,'valign' => 'center'), $cellHCentered);
    	  $table->addCell(2000, $cellVCentered)->addText($value['FIO'], array('bold' => false,'valign' => 'center'), $cellHCentered);
    	  $table->addCell(2000, $cellVCentered)->addText($value['position'], array('bold' => false,'valign' => 'center'), $cellHCentered);
    	  $table->addCell(2000, $cellVCentered)->addText($value['address'], array('bold' => false,'valign' => 'center'), $cellHCentered);
		  $table->addCell(2000, $cellVCentered)->addText($value['telephone'], array('bold' => false,'valign' => 'center'), $cellHCentered);

	  }







	// echo "<pre>",var_dump($section),"</pre>";
	// die();

	// Saving the document as OOXML file...
	$objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
	$objWriter->save('helloWorld.docx');


	// print_r($objWriter);

















die('stop');



















		}
	}
