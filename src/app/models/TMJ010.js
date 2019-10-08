/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMJ010', {
    TMJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMJ_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMJ_DTCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMJ_HRCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMJ_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMJ_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMJ_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMJ_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMJ_CONVOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TMJ_DTPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMJ_DTATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMJ_OBSCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    TMJ_PCMSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMJ_FILFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMJ_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TMJ_ATEENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMJ_CODENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMJ_DTENFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMJ_HRENFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMJ_INDENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMJ_QTDHRS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMJ_HRCHGD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMJ_HRSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
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
    tableName: 'TMJ010'
  });
};
