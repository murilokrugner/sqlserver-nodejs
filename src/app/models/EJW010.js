/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EJW010', {
    EJW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJW_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJW_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    EJW_INT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJW_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EJW_EXPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJW_LOJEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJW_IMPORT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJW_LOJIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJW_STTPED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJW_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJW_VL_MOE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJW_VL_REA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EJW_DTPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EJW_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EJW_COMPL: {
      type: "IMAGE",
      allowNull: true
    },
    EJW_STTFAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EJW_MSGLOG: {
      type: "IMAGE",
      allowNull: true
    },
    EJW_CODEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EJW_LOJEMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EJW_CGC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    tableName: 'EJW010'
  });
};
