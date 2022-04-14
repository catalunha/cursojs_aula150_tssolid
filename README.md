#




# SOLID

## S
Single Responsability Principle
Projeto: ./src/srp

## O
Open Closed Principle
Entidades devem estar abertas para extensão mas fechadas para modificação.
Projeto: ./src/ocp
Colocou discount como uma classe aberta para novos descontos

## L
Liskov-Subsitution Principle
Projeto: ./src/lsp
Versão 1: Subtipos precisam ser substituíveis por seus tipos base.
Sem nenhuma alteração apenas explicou que o discount nao poderia ter varias metodos

## I
Interface Segregation Principle
Projeto: ./src/isp
Os clientes nao devem ser forçados a depender de type/interfaces/class/metodos que não utilizam

## D
Dependency Invertion Principle
Projeto: ./src/dip
Modulos de alto nivel não devem depender de módulos de baixo nível. ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
Classes de baixo nivel são classes que executam tarefas (os detalhes)
Classes de alto nivel são classes que gerenciam as classes de baixo nivel.

## Vantagens
* Codigo modular
* DRY - Don't Repeat Yourself
* Codigo testavel pelas abstrações
* Baixo acoplamento pelas abstrações
* Alta coesao das classes (só fazem uma coisa)
* Expansível
* SOC - Separte of Concepts - Separação de conceitos

## Desvantagens
* Mais codigos
* Mais classes
* Mais complexos

## Outros
* YAGNI - You aren't gonna need it / Vc nao vai precisar disto
* KISS - Keep it simple, stupid!
* MVP - Minimal Viable Product ou PMV - Produto Minimo Viável
* SOC -
*


# Legacy
Projeto base construido para resolver o problema sem abstrações/otimizações/etc sem nenhum principio

# Preparando ambiente
Copiar arquivos de outro projeto e editar.
E pedir pra atualizar conforme package.json
```
$ npm install
```
