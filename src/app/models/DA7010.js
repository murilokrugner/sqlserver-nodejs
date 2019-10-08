/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DA7010', {
    DA7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA7_PERCUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA7_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA7_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA7_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DA7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DA7_CEPDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA7_CEPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DA7_REF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DA7_VISITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    DA7_PEROBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DA7010'
  });
};
