| # | WS Compliance | Conector | API Netsuite | Condição / Regra |
| --- | --- | --- | --- | --- |
| 1 | participantes/codPart | codpart | results/custentity_brl_entity_t_fed_tax_reg | Se for nulo, usar results/entityid |
| 2 | participantes/dmTipoPessoa | dmtipopessoa | results/isperson | Se country ≠ "BR", usar 2; senão aplicar de-para |
| 3 | participantes/Nome | nome | results/companyname | Se nulo, usar results/altname |
| 4 | participantes/Fantasia | fantasia | results/altname |  |
| 5 | participantes/codNif | codnif |  |  |
| 6 | participantes/endereco/logradouro | endereco_logradouro | results/addr1 |  |
| 7 | participantes/endereco/numero | endereco_numero | results/addr3 |  |
| 9 | participantes/endereco/complemento | endereco_complemento | results/custrecord_brl_addrform_t_complement |  |
| 10 | participantes/endereco/bairro | endereco_bairro | results/addr2 |  |
| 11 | participantes/endereco/ibgeCidade | endereco_ibgecidade | custrecord_ftebr_city_i_ibge_code | Se exterior → 9999999 |
| 12 | participantes/endereco/cep | endereco_cep | results/zip | Se exterior → nulo |
| 14 | endereco_uf | - | results/state | Se exterior → EX |
| 15 | participantes/endereco/codSiscomexPais | endereco_codsiscomexpais | results/country | Buscar coluna "sped" pela sigla do país |
| 16 | participantes/contato/telefone | contato_telefone | results/phone |  |
| 18 | participantes/contato/email | contato_email | results/email |  |
| 19 | participantes/documentos/cpfCnpj/cpf | documentos_cpf_cnpj | results/custentity_brl_entity_t_fed_tax_reg |  |
| 23 | participantes/documentos/ie | documentos_inscricaomunicipal | results/custentity_brl_entity_t_municip_tx_reg |  |
| 44 | numero_da_linha | - | results/rownumber |  |
| 45 | chave_logica | - | concatenação | Prefixo F ou C + CNPJ/CPF<br>Vendor = F, Consumer = C |