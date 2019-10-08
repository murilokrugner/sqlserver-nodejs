/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVN010', {
    CVN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVN_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CVN_DSCPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVN_DTVIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVN_DTVIGF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CVN_ENTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVN_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CVN_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVN_DSCCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CVN_TPUTIL: {
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
    CVN_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CVN_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CVN_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CVN_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVN_CTAREL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CVN_STAPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CVN010'
  });
};
