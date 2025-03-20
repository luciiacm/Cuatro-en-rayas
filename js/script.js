
var turno=1;

var colSel = 0;

var hCol0 = 0;
var hCol1 = 0;
var hCol2 = 0;
var hCol3 = 0;
var hCol4 = 0;
var hCol5 = 0;
var hCol6 = 0;

var tablero = [[0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0]];

 
function colocarFicha (col, fila) {
	if (turno==1) {
		document.getElementById("mensaje").innerHTML="Turno del jugador 2";			
		turno=2;
		switch (col) {
			case 0: 
				colSel = hCol0;
				hCol0++;
			break;	
			case 1:
				colSel = hCol1;
				hCol1++;
			break;
			case 2: 
				colSel = hCol2;
				hCol2++;
			break;
			case 3: 
				colSel = hCol3;
				hCol3++;
			break;
			case 4: 
				colSel = hCol4;
				hCol4++;
			break;
			case 5: 
				colSel = hCol5;
				hCol5++;
			break;
			case 6: 
				colSel = hCol6; 
				hCol6++;
			break;
		}
	document.getElementById(col+"-"+colSel).src = "raton.png";
	tablero[col][colSel] = 1;
	verificarVictoria (col, fila);
	}
	
	else {
		document.getElementById("mensaje").innerHTML="Turno del jugador 1"; 	
		turno=1;
		switch (col) {
			case 0: 
				colSel = hCol0;
				hCol0++;
			break;	
			case 1:
				colSel = hCol1;
				hCol1++;
			break;
			case 2: 
				colSel = hCol2;
				hCol2++;
			break;
			case 3: 
				colSel = hCol3;
				hCol3++;
			break;
			case 4: 
				colSel = hCol4;
				hCol4++;
			break;
			case 5: 
				colSel = hCol5;
				hCol5++;
			break;
			case 6: 
				colSel = hCol6; 
				hCol6++;
			break;
		}
	document.getElementById(col+"-"+colSel).src = "cerdo.png";
	tablero[col][colSel] = 2;
	verificarVictoria (col, fila);
	}	
}

	
function verificarVictoria (col, fila) {
	//condición de victoria jugador 1 por colummnas 
	if (tablero[0][0] == 1 && tablero[0][1] == 1 && tablero[0][2] == 1 && tablero[0][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[0][1] == 1 && tablero[0][2] == 1 && tablero[0][3] == 1 && tablero[0][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[0][2] == 1 && tablero[0][3] == 1 && tablero[0][4] == 1 && tablero[0][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][0] == 1 && tablero[1][1] == 1 && tablero[1][2] == 1 && tablero[1][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][1] == 1 && tablero[1][2] == 1 && tablero[1][3] == 1 && tablero[1][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][2] == 1 && tablero[1][3] == 1 && tablero[1][4] == 1 && tablero[1][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[2][0] == 1 && tablero[2][1] == 1 && tablero[2][2] == 1 && tablero[2][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][1] == 1 && tablero[2][2] == 1 && tablero[2][3] == 1 && tablero[2][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][2] == 1 && tablero[2][3] == 1 && tablero[2][4] == 1 && tablero[2][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[3][0] == 1 && tablero[3][1] == 1 && tablero[3][2] == 1 && tablero[3][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][1] == 1 && tablero[3][2] == 1 && tablero[3][3] == 1 && tablero[3][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][2] == 1 && tablero[3][3] == 1 && tablero[3][4] == 1 && tablero[3][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[4][0] == 1 && tablero[4][1] == 1 && tablero[4][2] == 1 && tablero[4][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[4][1] == 1 && tablero[4][2] == 1 && tablero[4][3] == 1 && tablero[4][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[4][2] == 1 && tablero[4][3] == 1 && tablero[4][4] == 1 && tablero[4][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[5][0] == 1 && tablero[5][1] == 1 && tablero[5][2] == 1 && tablero[5][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[5][1] == 1 && tablero[5][2] == 1 && tablero[5][3] == 1 && tablero[5][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[5][2] == 1 && tablero[5][3] == 1 && tablero[5][4] == 1 && tablero[5][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[6][0] == 1 && tablero[6][1] == 1 && tablero[6][2] == 1 && tablero[6][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[6][1] == 1 && tablero[6][2] == 1 && tablero[6][3] == 1 && tablero[6][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[6][2] == 1 && tablero[6][3] == 1 && tablero[6][4] == 1 && tablero[6][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	//condición de victoria jugador 1 por filas 
	if (tablero[0][0] == 1 && tablero[1][0] == 1 && tablero[2][0] == 1 && tablero[3][0] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][0] == 1 && tablero[2][0] == 1 && tablero[3][0] == 1 && tablero[4][0] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][0] == 1 && tablero[3][0] == 1 && tablero[4][0] == 1 && tablero[5][0] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][0] == 1 && tablero[4][0] == 1 && tablero[5][0] == 1 && tablero[6][0] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[0][1] == 1 && tablero[1][1] == 1 && tablero[2][1] == 1 && tablero[3][1] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][1] == 1 && tablero[2][1] == 1 && tablero[3][1] == 1 && tablero[4][1] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][1] == 1 && tablero[3][1] == 1 && tablero[4][1] == 1 && tablero[5][1] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][1] == 1 && tablero[4][1] == 1 && tablero[5][1] == 1 && tablero[6][1] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[0][2] == 1 && tablero[1][2] == 1 && tablero[2][2] == 1 && tablero[3][2] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][2] == 1 && tablero[2][2] == 1 && tablero[3][2] == 1 && tablero[4][2] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][2] == 1 && tablero[3][2] == 1 && tablero[4][2] == 1 && tablero[5][2] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][2] == 1 && tablero[4][2] == 1 && tablero[5][2] == 1 && tablero[6][2] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[0][3] == 1 && tablero[1][3] == 1 && tablero[2][3] == 1 && tablero[3][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][3] == 1 && tablero[2][3] == 1 && tablero[3][3] == 1 && tablero[4][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][3] == 1 && tablero[3][3] == 1 && tablero[4][3] == 1 && tablero[5][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][3] == 1 && tablero[4][3] == 1 && tablero[5][3] == 1 && tablero[6][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[0][4] == 1 && tablero[1][4] == 1 && tablero[2][4] == 1 && tablero[3][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][4] == 1 && tablero[2][4] == 1 && tablero[3][4] == 1 && tablero[4][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][4] == 1 && tablero[3][4] == 1 && tablero[4][4] == 1 && tablero[5][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][4] == 1 && tablero[4][4] == 1 && tablero[5][4] == 1 && tablero[6][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[0][5] == 1 && tablero[1][5] == 1 && tablero[2][5] == 1 && tablero[3][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][5] == 1 && tablero[2][5] == 1 && tablero[3][5] == 1 && tablero[4][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][5] == 1 && tablero[3][5] == 1 && tablero[4][5] == 1 && tablero[5][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][5] == 1 && tablero[4][5] == 1 && tablero[5][5] == 1 && tablero[6][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	//condición de victoria jugador 1 por diagonal 
	if (tablero[0][0] == 1 && tablero[1][1] == 1 && tablero[2][2] == 1 && tablero[3][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[0][1] == 1 && tablero[1][2] == 1 && tablero[2][3] == 1 && tablero[3][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[0][2] == 1 && tablero[1][3] == 1 && tablero[2][4] == 1 && tablero[3][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[1][0] == 1 && tablero[2][1] == 1 && tablero[3][2] == 1 && tablero[4][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][1] == 1 && tablero[2][2] == 1 && tablero[3][3] == 1 && tablero[4][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[1][2] == 1 && tablero[2][3] == 1 && tablero[3][4] == 1 && tablero[4][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[2][0] == 1 && tablero[3][1] == 1 && tablero[4][2] == 1 && tablero[5][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][1] == 1 && tablero[3][2] == 1 && tablero[4][3] == 1 && tablero[5][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[2][2] == 1 && tablero[3][3] == 1 && tablero[4][4] == 1 && tablero[5][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[3][0] == 1 && tablero[4][1] == 1 && tablero[5][2] == 1 && tablero[6][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][1] == 1 && tablero[4][2] == 1 && tablero[5][3] == 1 && tablero[6][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][2] == 1 && tablero[4][3] == 1 && tablero[5][4] == 1 && tablero[6][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[6][0] == 1 && tablero[5][1] == 1 && tablero[4][2] == 1 && tablero[3][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[6][1] == 1 && tablero[5][2] == 1 && tablero[4][3] == 1 && tablero[3][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[6][2] == 1 && tablero[5][3] == 1 && tablero[4][4] == 1 && tablero[3][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[5][0] == 1 && tablero[4][1] == 1 && tablero[3][2] == 1 && tablero[2][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[5][1] == 1 && tablero[4][2] == 1 && tablero[3][3] == 1 && tablero[2][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[5][2] == 1 && tablero[4][3] == 1 && tablero[3][4] == 1 && tablero[2][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[4][0] == 1 && tablero[3][1] == 1 && tablero[2][2] == 1 && tablero[1][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[4][1] == 1 && tablero[3][2] == 1 && tablero[2][3] == 1 && tablero[1][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[4][2] == 1 && tablero[3][3] == 1 && tablero[2][4] == 1 && tablero[1][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	if (tablero[3][0] == 1 && tablero[2][1] == 1 && tablero[1][2] == 1 && tablero[0][3] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][1] == 1 && tablero[2][2] == 1 && tablero[1][3] == 1 && tablero[0][4] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}	
	if (tablero[3][2] == 1 && tablero[2][3] == 1 && tablero[1][4] == 1 && tablero[0][5] == 1){
		document.getElementById("mensaje").innerHTML="Victoria jugador 1";
	}
	
	
	//condición de victoria jugador 2 por colummnas 
	if (tablero[0][0] == 2 && tablero[0][1] == 2 && tablero[0][2] == 2 && tablero[0][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[0][1] == 2 && tablero[0][2] == 2 && tablero[0][3] == 2 && tablero[0][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[0][2] == 2 && tablero[0][3] == 2 && tablero[0][4] == 2 && tablero[0][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][0] == 2 && tablero[1][1] == 2 && tablero[1][2] == 2 && tablero[1][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][1] == 2 && tablero[1][2] == 2 && tablero[1][3] == 2 && tablero[1][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][2] == 2 && tablero[1][3] == 2 && tablero[1][4] == 2 && tablero[1][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[2][0] == 2 && tablero[2][1] == 2 && tablero[2][2] == 2 && tablero[2][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][1] == 2 && tablero[2][2] == 2 && tablero[2][3] == 2 && tablero[2][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][2] == 2 && tablero[2][3] == 2 && tablero[2][4] == 2 && tablero[2][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[3][0] == 2 && tablero[3][1] == 2 && tablero[3][2] == 2 && tablero[3][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][1] == 2 && tablero[3][2] == 2 && tablero[3][3] == 2 && tablero[3][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][2] == 2 && tablero[3][3] == 2 && tablero[3][4] == 2 && tablero[3][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[4][0] == 2 && tablero[4][1] == 2 && tablero[4][2] == 2 && tablero[4][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[4][1] == 2 && tablero[4][2] == 2 && tablero[4][3] == 2 && tablero[4][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[4][2] == 2 && tablero[4][3] == 2 && tablero[4][4] == 2 && tablero[4][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[5][0] == 2 && tablero[5][1] == 2 && tablero[5][2] == 2 && tablero[5][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[5][1] == 2 && tablero[5][2] == 2 && tablero[5][3] == 2 && tablero[5][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[5][2] == 2 && tablero[5][3] == 2 && tablero[5][4] == 2 && tablero[5][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[6][0] == 2 && tablero[6][1] == 2 && tablero[6][2] == 2 && tablero[6][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[6][1] == 2 && tablero[6][2] == 2 && tablero[6][3] == 2 && tablero[6][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[6][2] == 2 && tablero[6][3] == 2 && tablero[6][4] == 2 && tablero[6][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	//condición de victoria jugador 2 por filas 
	if (tablero[0][0] == 2 && tablero[1][0] == 2 && tablero[2][0] == 2 && tablero[3][0] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][0] == 2 && tablero[2][0] == 2 && tablero[3][0] == 2 && tablero[4][0] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][0] == 2 && tablero[3][0] == 2 && tablero[4][0] == 2 && tablero[5][0] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][0] == 2 && tablero[4][0] == 2 && tablero[5][0] == 2 && tablero[6][0] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[0][1] == 2 && tablero[1][1] == 2 && tablero[2][1] == 2 && tablero[3][1] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][1] == 2 && tablero[2][1] == 2 && tablero[3][1] == 2 && tablero[4][1] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][1] == 2 && tablero[3][1] == 2 && tablero[4][1] == 2 && tablero[5][1] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][1] == 2 && tablero[4][1] == 2 && tablero[5][1] == 2 && tablero[6][1] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[0][2] == 2 && tablero[1][2] == 2 && tablero[2][2] == 2 && tablero[3][2] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][2] == 2 && tablero[2][2] == 2 && tablero[3][2] == 2 && tablero[4][2] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][2] == 2 && tablero[3][2] == 2 && tablero[4][2] == 2 && tablero[5][2] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][2] == 2 && tablero[4][2] == 2 && tablero[5][2] == 2 && tablero[6][2] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[0][3] == 2 && tablero[1][3] == 2 && tablero[2][3] == 2 && tablero[3][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][3] == 2 && tablero[2][3] == 2 && tablero[3][3] == 2 && tablero[4][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][3] == 2 && tablero[3][3] == 2 && tablero[4][3] == 2 && tablero[5][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][3] == 2 && tablero[4][3] == 2 && tablero[5][3] == 2 && tablero[6][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[0][4] == 2 && tablero[1][4] == 2 && tablero[2][4] == 2 && tablero[3][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][4] == 2 && tablero[2][4] == 2 && tablero[3][4] == 2 && tablero[4][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][4] == 2 && tablero[3][4] == 2 && tablero[4][4] == 2 && tablero[5][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][4] == 2 && tablero[4][4] == 2 && tablero[5][4] == 2 && tablero[6][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[0][5] == 2 && tablero[1][5] == 2 && tablero[2][5] == 2 && tablero[3][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][5] == 2 && tablero[2][5] == 2 && tablero[3][5] == 2 && tablero[4][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][5] == 2 && tablero[3][5] == 2 && tablero[4][5] == 2 && tablero[5][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][5] == 2 && tablero[4][5] == 2 && tablero[5][5] == 2 && tablero[6][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	//condición de victoria jugador 2 por diagonal 
	if (tablero[0][0] == 2 && tablero[1][1] == 2 && tablero[2][2] == 2 && tablero[3][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[0][1] == 2 && tablero[1][2] == 2 && tablero[2][3] == 2 && tablero[3][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[0][2] == 2 && tablero[1][3] == 2 && tablero[2][4] == 2 && tablero[3][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[1][0] == 2 && tablero[2][1] == 2 && tablero[3][2] == 2 && tablero[4][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][1] == 2 && tablero[2][2] == 2 && tablero[3][3] == 2 && tablero[4][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[1][2] == 2 && tablero[2][3] == 2 && tablero[3][4] == 2 && tablero[4][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[2][0] == 2 && tablero[3][1] == 2 && tablero[4][2] == 2 && tablero[5][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][1] == 2 && tablero[3][2] == 2 && tablero[4][3] == 2 && tablero[5][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[2][2] == 2 && tablero[3][3] == 2 && tablero[4][4] == 2 && tablero[5][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[3][0] == 2 && tablero[4][1] == 2 && tablero[5][2] == 2 && tablero[6][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][1] == 2 && tablero[4][2] == 2 && tablero[5][3] == 2 && tablero[6][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][2] == 2 && tablero[4][3] == 2 && tablero[5][4] == 2 && tablero[6][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[6][0] == 2 && tablero[5][1] == 2 && tablero[4][2] == 2 && tablero[3][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[6][1] == 2 && tablero[5][2] == 2 && tablero[4][3] == 2 && tablero[3][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[6][2] == 2 && tablero[5][3] == 2 && tablero[4][4] == 2 && tablero[3][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[5][0] == 2 && tablero[4][1] == 2 && tablero[3][2] == 2 && tablero[2][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[5][1] == 2 && tablero[4][2] == 2 && tablero[3][3] == 2 && tablero[2][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[5][2] == 2 && tablero[4][3] == 2 && tablero[3][4] == 2 && tablero[2][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[4][0] == 2 && tablero[3][1] == 2 && tablero[2][2] == 2 && tablero[1][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[4][1] == 2 && tablero[3][2] == 2 && tablero[2][3] == 2 && tablero[1][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[4][2] == 2 && tablero[3][3] == 2 && tablero[2][4] == 2 && tablero[1][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
	if (tablero[3][0] == 2 && tablero[2][1] == 2 && tablero[1][2] == 2 && tablero[0][3] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][1] == 2 && tablero[2][2] == 2 && tablero[1][3] == 2 && tablero[0][4] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}	
	if (tablero[3][2] == 2 && tablero[2][3] == 2 && tablero[1][4] == 2 && tablero[0][5] == 2){
		document.getElementById("mensaje").innerHTML="Victoria jugador 2";
	}
}
