/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTM010', {
    CTM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTM_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTM_DESCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTM_SEGMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTM_DIGITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTM_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTM_SEPARA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTM_IDENT: {
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
    }
  }, {
    tableName: 'CTM010'
  });
};
