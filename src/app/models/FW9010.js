/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FW9010', {
    FW9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW9_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FW9_IDDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                '
    },
    FW9_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FW9_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FW9_PARCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FW9_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FW9_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FW9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW9_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FW9_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FW9_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                            '
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
    tableName: 'FW9010'
  });
};
