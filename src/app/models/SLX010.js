/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLX010', {
    LX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_PDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    LX_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LX_DTMOVTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    LX_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    LX_CUPOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    LX_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LX_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LX_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    LX_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LX_SUPERVI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    LX_SITUACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_TPCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LX_DESCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LX_ALIQICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LX_LEGENDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    LX_SITUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_VRUNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LX_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LX_MODDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LX_ERGRVBT: {
      type: "IMAGE",
      allowNull: true
    },
    LX_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    }
  }, {
    tableName: 'SLX010'
  });
};
