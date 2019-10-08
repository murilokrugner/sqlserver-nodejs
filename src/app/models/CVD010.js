/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVD010', {
    CVD_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVD_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CVD_ENTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVD_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVD_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVD_CUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CVD_TPUTIL: {
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
    },
    CVD_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CVD_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVD_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVD_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'CVD010'
  });
};
