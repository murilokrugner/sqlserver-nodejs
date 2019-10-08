/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE6990', {
    E6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E6_FILORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E6_NUMSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_DATSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    E6_HORSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    E6_PREFIXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E6_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    E6_PARCELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E6_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    E6_CDHSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_CDHREJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_HISREJ: {
      type: "IMAGE",
      allowNull: true
    },
    E6_SITSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    E6_USRSOL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_USRAPV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    E6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E6_FILDEB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    E6_PARCDES: {
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
    tableName: 'SE6990'
  });
};
