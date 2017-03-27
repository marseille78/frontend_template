/**
* Действительная проверка на число
* --------------------------------
* Если же нужна действительно точная проверка на число,
* которая не считает числом строку из пробелов,
* логические и специальные значения, а также отсекает Infinity
*/
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
* Получить дробную часть числа
*/
function getDecimal(num) {
	var str = num.toString();
	var point = str.indexOf('.');

	if (point === -1) return 0;

	return parseFloat("0" + str.slice(point));
}

/**
* Получение случайного числа
*/
function getRandom(obj) {
  max = obj.max || 1;
  min = obj.min || undefined;
  isInt = Boolean(obj.isInt)||false;
  
  var result = Math.random();
  
  result = (!min) ? result * max : result * (max - min) + min;
  
  if (isInt) return Math.round(result);
  
  return result;
}

/**
* Поиск всех вхождений подстроки в строку
* Возвращает массив позиций
*/
function getPositionsSubstrAll(str, substr) {
  var pos = 0;
  var resPositions = [];
  
  while(true) {
    var foundPos = str.indexOf(substr, pos);
    if (foundPos === -1) break;
    resPositions.push(foundPos);
    pos = ++foundPos;
  }
  
  return resPositions;
}

/**
* Возврат строки с первыам заглавным символом
*/
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
* Функция для усечения слишком длинных тем сообщений
*/
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, (maxLength)) + '...';
  }
  return str;
}