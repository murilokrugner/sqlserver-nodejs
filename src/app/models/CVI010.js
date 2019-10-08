/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVI010', {
    CVI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVI_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVI_LANPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVI_OPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVI_PROCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVI_SEQLAN: {
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
    tableName: 'CVI010'
  });
};
