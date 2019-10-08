/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MA7010', {
    MA7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA7_FILCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA7_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    MA7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA7_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA7_ECIVIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA7_OCUPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_PAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MA7_MAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MA7_TRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    MA7_CELULA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MA7_SPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_SPCRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_SPCPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_SPCOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_SPCPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_BLOQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    MA7_HORABL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA7_USRBL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    MA7_MOTBL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_VLRBL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA7_DTHRDS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    MA7_ARQPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_ARQPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    MA7_LC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA7_CARTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA7_TPCRED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    MA7_DATABL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    MA7_MOTTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    MA7_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    MA7_PONCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA7_PONPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA7_CONTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    MA7_PONTOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    MA7_IPRPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    MA7_PORRPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    MA7_ENVRPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    MA7_NUMBLQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    tableName: 'MA7010'
  });
};
