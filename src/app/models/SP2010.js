/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SP2010', {
    P2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P2_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    P2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P2_DATAATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    P2_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P2_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    P2_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_TRABA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_TIPODIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_NONAHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_CODHEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_CODHNOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P2_INIHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_FIMHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_MINHNOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HNOTTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_HNOTTBI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_ENTRA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_SAIDA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_ENTRA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_SAIDA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_ENTRA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_SAIDA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_ENTRA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_SAIDA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HORMENO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HORMAIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_JND1CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_JND2CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_JND3CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_JND4CON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_INTERV1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_INTERV2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_INTERV3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_HRINTV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRINTV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRINTV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRSTRAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRSTRA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRSTRA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_HRSTRA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_TOTHORA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    P2_CCPER01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_CCPER02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_CCPER03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_CCPER04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_REGRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    P2_HERDHOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_POSTO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P2_POSTO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P2_POSTO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P2_POSTO4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    P2_DEPTO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_DEPTO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_DEPTO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_DEPTO4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    P2_CODFUN1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P2_CODFUN2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P2_CODFUN3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P2_CODFUN4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    P2_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    P2_TPEXCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    P2_RHEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SP2010'
  });
};
