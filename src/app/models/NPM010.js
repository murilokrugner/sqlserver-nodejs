/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NPM010', {
    NPM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NPM_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NPM_CODAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NPM_NUMPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NPM_NFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    NPM_SERNFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    NPM_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NPM_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NPM_VOLUME: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPM_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NPM_SDOC: {
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
    tableName: 'NPM010'
  });
};
