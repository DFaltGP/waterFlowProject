#include <VirtualWire.h> // LIB RF433
#include <LiquidCrystal.h>  // LIB DISPLAY LCD 16x2
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

#define pinRF  13  // VARIAVEL DO PINO DO RECEPTOR

struct tipoPacote {
  int valor1;
  byte valor2;
  int valor3;
};

tipoPacote pacote; 
uint8_t buf[sizeof(pacote)];
uint8_t buflen = sizeof(pacote);

void setup() {
  vw_set_rx_pin(pinRF);
  vw_setup(2000);   
  vw_rx_start();

  lcd.begin(16, 2);                // CÓDIGO PARA INICIAR O SENSOR COM MENSAGEM
  lcd.setCursor(0, 0);
  lcd.print("Sensor ativo");
  delay(1000);
  lcd.clear();                     // DEPOIS DE 5 SEGUNDOS ELE REMOVE A MENSAGEM
  lcd.setCursor(0, 4);
  lcd.print("Aguardando sinal");
  lcd.setCursor(1, 2);
  lcd.print("Sem fluxo");
  delay(3000);
  lcd.setCursor(0, 1);
  lcd.print("               ");    // ALTERNATIVA PARA NÃO LIMPAR DISPLAY
}

void loop() {

  if ( vw_have_message() ) {
    vw_get_message(buf, &buflen);
    memcpy(&pacote,&buf,buflen);
    /* AQUI DEVEM FICAR AS MENSAGENS DO DISPLAY
    EXEMPLO: 
            FLUXO = 60ML
            VAZÃO = 3L/MIN        OS CODIGOS SERÃO RODADOS APENAS QUANDO 
                                  HOUVER MENSAGEM SENDO RECEBIDA PELO RECEPTOR 
          */
  }  
}
