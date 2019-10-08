/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKI010', {
    QKI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKI_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKI_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKI_ITSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_ADENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKI_DTADEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_PEDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKI_PESO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_DISMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKI_AUXVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKI_ALDMEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKI_DTDIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_SUBDIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_SUBMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_SUBAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_COMPRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_APLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_FLNT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_FLNT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_FLRZSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKI_OUTRO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_FLNISU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_RESDIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_RESMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_RESAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_RESEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_MOLDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKI_TXPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKI_COMENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    QKI_NOMAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_CARAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_TELAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKI_DTAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_DISCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_OUTRO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_APRFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QKI_REPCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKI_DTRCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QKI_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKI_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_DESCHV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QKI_COMEN1: {
      type: "IMAGE",
      allowNull: true
    },
    QKI_IMDSID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKI_IMDSVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_IMDSDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKI_TMPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    QKI_FAXAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    QKI_EMAAPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QKI_FERCLI: {
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
    tableName: 'QKI010'
  });
};
