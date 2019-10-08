/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJX010', {
    EJX_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJX_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJX_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJX_SEQPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    EJX_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    EJX_NBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    EJX_MODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJX_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJX_DTPRIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_DTPRFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_QTDE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_PRCUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_TX_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_VL_REA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    EJX_ENQ01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJX_RC01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_ENQ02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJX_RC02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_ENQ03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJX_RC03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJX_STTPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJX_SLDINV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJX_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJX_MOVTEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'EJX010'
  });
};
