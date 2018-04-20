<?php
    include ('Validacao.php');
    class Visita{
        private $nome;
        private $data;
        private $hora_inicio;
        
        public function __construct($nome, $data, $hora_inicio){
            $this->nome=$nome;
            $this->data = $data;
            $this->hora_inicio = $hora_inicio;
        }

        public function get_nome(){
            return $this->nome;
        }

        public function get_data(){
            return $this->data;
        }
        public function get_hora_inicio(){
            return $this->hora_inicio;
        }

        private function validar_nome(){
            if(!Validacao::validar_nome($nome,44))  return false;
                return true;
            
            }


        private function validar_data(){
            if(!Validacao::validar_data($this->data)){
                return false;
            }
            return true;
        }

        private function validar_hora(){
            if(!Validacao::validar_hora($this->hora_inicio)){
                return false;
            }
            return true;
        }

        public function is_valid(){
            if($this->validar_data()&&$this->validar_nome()&&$this->validar_hora()){
                return true;
            }

            return false;


        }




    }   
    



?> 