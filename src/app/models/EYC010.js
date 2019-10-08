/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EYC010', {
    EYC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EYC_CODEVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYC_CODINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYC_CODAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYC_CODSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EYC_CONDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    }
  }, {
    tableName: 'EYC010'
  });
};
