/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCB010', {
    CB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB_NUMERO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CB_DATASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_DATAVIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_COND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_REAJUST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_TABHORA: {
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
    },
    CB_ESTACAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_ESTIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_ESTLOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_ESTMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_ESTCELE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_ESTT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_REDUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_USERLGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CB_USERLGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CB_CONTRTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CB_DTLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_USERLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    CB_TABANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB_DTTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CB_GEROU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_DTSITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_LIBMAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_INDICE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CB_MSEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_MSRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_AUDITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_SITEPAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_SITEMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_COLIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_CODVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CB_USUALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    CB_DATALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_STATCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_ULTIMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CB_MAXUSR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_ACCNET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_NUMACC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_DTENVIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CB_NOMEREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    CB_NREGENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    CB_PROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SCB010'
  });
};
