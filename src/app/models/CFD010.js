/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CFD010', {
    CFD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFD_PERCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFD_PERVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CFD_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CFD_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '             '
    },
    CFD_VPARIM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFD_VSAIIE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFD_CONIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CFD_FCICOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CFD_FILOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CFD_ORIGEM: {
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
    }
  }, {
    tableName: 'CFD010'
  });
};
