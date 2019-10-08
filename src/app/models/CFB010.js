/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CFB010', {
    CFB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFB_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFB_TPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CFB_VLRREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFB_CONREC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFB_PERDIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFB_DTPGTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CFB_NATCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFB_CREDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFB_PERAPU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFB_ALIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    CFB_CONSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CFB010'
  });
};
