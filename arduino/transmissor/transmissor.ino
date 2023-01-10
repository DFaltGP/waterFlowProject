#include <VirtualWire.h> // NOTE QUE FUTURAMENTE DEVEMOS INCLUIR A LIB DO SENSOR

#define pinPot A0 // ENTRADA DO SINAL ANALÓGICO VIA POTENCIOMETRO
#define pinRF  12 // SAÍDA PARA O TRANSMISSOR
#define pinLED 13 // SAÍDA PARA O LED QUE INDICA TRANSMISSÃO DE DADOS

struct tipoPacote {
  int valor1;
  byte valor2;
  int valor3;
};

tipoPacote pacote; 

void setup() {

  vw_set_tx_pin(pinRF);           
  vw_set_ptt_inverted(true);
  vw_setup(2000); // DEFINE A VELOCIDADE DA TRANSMISSÃO. MAX 4000 
  pinMode(pinLED, OUTPUT);

  //Serial.begin(9600);
}

void loop() {
  digitalWrite(pinLED, HIGH); 
  
  int  leitura1 = analogRead(pinPot);
  byte leitura2 = map(leitura1, 0, 1023, 0, 255);
  int  leitura3 = map(leitura1, 0, 1023, 120, 0);

  pacote.valor1 = leitura1;
  pacote.valor2 = leitura2;
  pacote.valor3 = leitura3;

  /*
  Serial.print(pacote.valor1);
  Serial.print(" | ");
  Serial.print(pacote.valor2); // ZONA DE TESTES NO MONITOR SERIAL
  Serial.print(" | ");
  Serial.println(pacote.valor3);
  */
  
  vw_send((uint8_t *)&pacote, sizeof(pacote));
  vw_wait_tx(); // AQUI O CODIGO ESPERA A TRANSMISSÃO TERMINAR PARA CONTINUAR RODANDO 
  
  digitalWrite(pinLED, LOW);
  delay(2000);
}
