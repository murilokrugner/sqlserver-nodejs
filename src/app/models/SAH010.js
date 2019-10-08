/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAH010', {
    AH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH_UNIMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH_UMRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AH_DESCPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH_DESCIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH_DESCES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    AH_COD_SIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH_SIS_MER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH_CODRIEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AH_UM_SRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AH_COD_CO: {
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
    },
    AH_UMFCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AH_CODERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SAH010'
  });
};
